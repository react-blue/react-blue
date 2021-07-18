import appRoot from "app-root-path";

const defaultConfig = () => import("../blue.config.json");

const customConfig = (filename: string) => import(appRoot + `/${filename}`);

console.log(defaultConfig());
