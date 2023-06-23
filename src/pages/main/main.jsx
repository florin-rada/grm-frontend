import React from "react";
import { Menu } from "../../components/menu/menu";
import { Runner } from "../../components/runner/runner";

export const Main = () => {
    return (
        <>
            <Menu selected="/"></Menu>
            <div className="gap-3 grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-4 xl:grid-cols-8 2xl:grid-cols-10">
                <Runner name="runner1"></Runner>
                <Runner name="runner2"></Runner>
                <Runner name="runner3"></Runner>
                <Runner name="runner4"></Runner>
                <Runner name="runner5"></Runner>
                <Runner name="runner6"></Runner>
                <Runner name="runner7"></Runner>
                <Runner name="runner8"></Runner>
                <Runner name="runner9"></Runner>
                <Runner name="runner10"></Runner>
                <Runner name="runner11"></Runner>
                <Runner name="runner12"></Runner>
                <Runner name="runner13"></Runner>
            </div>
        </>
    )
}