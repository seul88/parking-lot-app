'use client'

import { FC } from "react"
import areaStyles from "@/app/parkingAreas/parkingAreas.module.css";
import createStyles from "@/app/parkingAreas/create/create.module.css";

export const AddButton:FC = () => {

    const onClick = () => {
        // todo: open create form
        // (set url param)
    };

    return (
        <button  
            className={`${areaStyles.actionButton} ${createStyles.createButton}`}
            onClick={onClick}
            title="Create"
        >
            <img src="/add.svg" alt="Create" width={16} height={16} /> Add new
        </button>
    )
}