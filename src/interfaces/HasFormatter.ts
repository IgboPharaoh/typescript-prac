export interface HasFormatter {
  format(): string;
}

// Generics
const ddUID = <T extends { name: string }>(obj: T) => {
  let uuid = Math.floor(Math.random() * 100);
  return { ...obj, uuid };
};
let docTwo = ddUID({ name: "shanks", school: " jutjitsu kaisen", houseNo: 34 });
console.log(docTwo);

interface Resource<T> {
  uuid: number;
  resourceName: string;
  data: T;
}

let docx: Resource<object> = {
  uuid: 23,
  resourceName: "straight",
  data: { name: "dax", age: 34 },
};
let docx2: Resource<string[]> = {
  uuid: 23,
  resourceName: "straight",
  data: ["dax", "34"],
};
// enums
enum ResourceType {
  say,
  coot,
  axe,
  oxen,
}

interface Resources<T> {
  uuid: number;
  resourceName: string;
  data: T;
  resourceType: ResourceType;
}

let docx3: Resources<string[]> = {
  uuid: 23,
  resourceType: ResourceType.axe,
  resourceName: "straight",
  data: ["dax", "34"],
};
// tuples
let values: [string, string, number]
