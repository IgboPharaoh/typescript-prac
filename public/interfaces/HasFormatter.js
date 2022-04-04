// Generics
const ddUID = (obj) => {
    let uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uuid });
};
let docTwo = ddUID({ name: "shanks", school: " jutjitsu kaisen", houseNo: 34 });
console.log(docTwo);
let docx = {
    uuid: 23,
    resourceName: "straight",
    data: { name: "dax", age: 34 },
};
let docx2 = {
    uuid: 23,
    resourceName: "straight",
    data: ["dax", "34"],
};
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["say"] = 0] = "say";
    ResourceType[ResourceType["coot"] = 1] = "coot";
    ResourceType[ResourceType["axe"] = 2] = "axe";
    ResourceType[ResourceType["oxen"] = 3] = "oxen";
})(ResourceType || (ResourceType = {}));
let docx3 = {
    uuid: 23,
    resourceType: ResourceType.axe,
    resourceName: "straight",
    data: ["dax", "34"],
};
// tuples
let values;
export {};
