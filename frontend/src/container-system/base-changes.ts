import {ContainerSettings, IContainerSettings} from "./container-system.ts";

const SET_BORDER_RADIUS_1: IContainerSettings = {
    change: function (settings: ContainerSettings): ContainerSettings{
        settings.setProperty("BORDER_RADIUS_TOP_LEFT_ANGLE", 1);
        settings.setProperty("BORDER_RADIUS_TOP_RIGHT_ANGLE", 1);
        settings.setProperty("BORDER_RADIUS_BOTTOM_LEFT_ANGLE", 1);
        settings.setProperty("BORDER_RADIUS_BOTTOM_RIGHT_ANGLE", 1);
        return settings;
    }
}

SET_BORDER_RADIUS_1;