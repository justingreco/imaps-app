import MapView from "@arcgis/core/views/MapView";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FieldColumnTemplate from "@arcgis/core/widgets/FeatureTable/support/FieldColumnTemplate";
import TableTemplate from "@arcgis/core/widgets/FeatureTable/support/TableTemplate";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import Graphic from "@arcgis/core/Graphic";
import ButtonMenuItem from "@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem";

import "../PropertyTable/PropertyTable.css";
let featureTable: FeatureTable;
export function initializeFeatureTable(
  ref: HTMLDivElement,
  view: MapView,
  featureSelected: Function
): Promise<FeatureTable> {
  return new Promise((resolve, reject) => {
    getTableLayer(view).then((table: any) => {
      featureTable = new FeatureTable({
        container: ref,
        view: view,
        editingEnabled: false,
        multiSortEnabled: true,
        visibleElements: {
          selectionColumn: false,
        },
        menuConfig: {
          items: [
            new ButtonMenuItem({
              label: "Export",
              iconClass: "esri-icon-download",
              clickFunction: () => {
                exportTable(featureTable);
              },
            }),
          ],
        },
        tableTemplate: getTableTemplate(table),
        layer: table,
      });

      featureTable?.when(() => {
        resolve(featureTable);
        initializeGrid(featureTable);
        featureTable.on("selection-change", (e) => {
          if (e.added.length) {
            (featureTable.layer as __esri.FeatureLayer)
              .queryFeatures({
                objectIds: [e.added[0].feature.getObjectId()],
                returnGeometry: true,
              })
              .then((featureSet) => {
                if (featureSet.features.length) {
                  view.goTo(featureSet.features[0]);
                  featureSelected(featureSet.features[0]);
                }
              });
          }
        });
      });
    });
  });
}
function initializeGrid(featureTable: FeatureTable) {
  (featureTable.findColumn("REID") as any).width = 100;
  (featureTable.findColumn("SITE_ADDRESS") as any).width = 130;
  (featureTable.findColumn("PIN_NUM") as any).width = 100;
  (featureTable.findColumn("OWNER") as any).width = 150;
  featureTable.refresh();

  requestAnimationFrame(() => {
    const grid = (featureTable.container as HTMLElement).querySelector(
      "vaadin-grid"
    ) as any;
    //set tabpanel to 100% in shadowRoot
    (featureTable.container as HTMLElement).parentElement?.shadowRoot?.querySelector('[role="tabpanel"]')?.setAttribute('style', 'height: 100%');
    grid?.addEventListener("cell-activate", (e: any) => {
      featureTable.clearSelection();
      const feature = e.detail.model.item.feature;
      featureTable.selectRows(feature);
      requestAnimationFrame(() => {
        const title = (featureTable.container as HTMLElement).querySelector(
          ".esri-feature-table__title"
        );
        if (title) {
          title.textContent = "Selected Properties: " + grid?.items?.length;
        }
      });
    });
  });
}

function getTableLayer(view: MapView) {
  return new Promise((resolve, reject) => {
    (
      view.map.allTables.find((table: __esri.Layer) => {
        return table.title.includes("Condo");
      }) as __esri.FeatureLayer
    )
      .load()
      .then((table) => {
        const copyTable = new FeatureLayer({
          source: [],
          fields: table.fields,
          geometryType: "polygon",
          spatialReference: view.spatialReference,
          popupTemplate: table.popupTemplate,
          objectIdField: table.objectIdField,
          displayField: table.displayField,
          id: "feature-table",
        });
        // copyTable.fields.forEach((field) => {
        //   field.nullable = true;
        //   if (field.name === "DEED_DATE") {
        //     field.type = "string";
        //   }
        // });
        view.map.allTables.add(copyTable);

        copyTable
          .load()
          .then((copyTable: FeatureLayer) => {
            resolve(copyTable);
          })
          .catch((reason) => {
            console.log(reason);
          });
      });
  });
}
function setSortPriority(fieldName: string): number | null {
  if (fieldName.includes("PIN")) {
    return 2;
  } else if (fieldName.includes("SITE_ADDRESS")) {
    return 0;
  } else if (fieldName.includes("OWNER")) {
    return 1;
  } else {
    return -1;
  }
}
function getTableTemplate(layer: __esri.FeatureLayer): TableTemplate {
  const tableTemplate: TableTemplate = new TableTemplate({
    columnTemplates: [],
  });

  const ignoreFields = ["OBJECTID", "PARCELPK", "GlobalID"];
  const showColumns = ["SITE_ADDRESS", "OWNER", "REID", "PIN_NUM", "PIN_EXT"];
  showColumns.forEach((columnName) => {
    const field = layer.popupTemplate.fieldInfos.find((column) => {
      return column.fieldName === columnName;
    }) as __esri.FieldInfo;
    if (field.fieldName === "SITE_ADDRESS") {
      field.label = "Address";
    }
    const columnTemplate = new FieldColumnTemplate({
      label: field.label,
      fieldName: field.fieldName,
      visible: showColumns.includes(field.fieldName),
      editable: false,
      initialSortPriority: setSortPriority(field.fieldName),
      direction: "asc",
    } as any);
    tableTemplate.columnTemplates.push(columnTemplate);
  });
  layer.popupTemplate.fieldInfos.forEach((field) => {
    if (
      !ignoreFields.includes(field.fieldName) &&
      !showColumns.includes(field.fieldName)
    ) {
      tableTemplate.columnTemplates.push(
        new FieldColumnTemplate({
          label: field.label,
          fieldName: field.fieldName,
          visible: showColumns.includes(field.fieldName),
          editable: false,
        } as any)
      );
    }
  });
  return tableTemplate;
}

export function updateTable(features: Graphic[], featureTable: FeatureTable) {
  if (featureTable) {
    (featureTable.layer as __esri.FeatureLayer)
      .queryFeatures({
        where: "1=1",
        returnGeometry: true,
      })
      .then((result: FeatureSet) => {
        (featureTable.layer as __esri.FeatureLayer)
          .applyEdits({ deleteFeatures: result.features })
          .then((result) => {
            (featureTable.layer as __esri.FeatureLayer)
              .applyEdits({ addFeatures: features })
              .then((result) => {
                featureTable.refresh();
              })
              .catch((reason) => {
                console.log(reason);
              });
          })
          .catch((reason) => {
            console.log(reason);
          });
      });
  }
}

const exportTable = (table: FeatureTable): void => {
  (table.layer as FeatureLayer)
    .queryFeatures({ where: "1=1", outFields: ["*"] })
    .then((result) => {
      let csv = "";
      (
        table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]
      ).forEach((field: __esri.FieldColumnTemplate) => {
        csv += `${field.label},`;
      });
      csv += "\r\n";
      result.features.forEach((feature) => {
        (
          table.tableTemplate.columnTemplates as __esri.FieldColumnTemplate[]
        ).forEach((field: __esri.FieldColumnTemplate) => {
          if (feature.attributes[field.fieldName]) {
            if (field.fieldName.toLowerCase().includes("date")) {
              csv += `"${new Date(
                feature.attributes[field.fieldName]
              ).toDateString()}",`;
            } else if (field.fieldName.toLowerCase().includes("acres")) {
              csv += `"${parseFloat(
                feature.attributes[field.fieldName]
              ).toFixed(2)}",`;
            } else {
              csv += `"${feature.attributes[field.fieldName]}",`;
            }
          } else {
            csv += `"",`;
          }
        });
        csv += "\r\n";
      });
      let datestr = new Date().toISOString();
      datestr = datestr.replaceAll(":", "").replaceAll("-", "");
      const exportedFilenmae = `imaps_export_${datestr}.csv`;

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
};
