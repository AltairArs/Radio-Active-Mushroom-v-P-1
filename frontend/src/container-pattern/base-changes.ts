import {ContainerSettings, IContainerSettingsChange} from "./container-pattern.ts";

export function CHANGE_CONTAINER_SET_BORDER_RADIUS(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.BORDER_RADIUS_BOTTOM_LEFT_ANGLE = value;
            settings.BORDER_RADIUS_TOP_RIGHT_ANGLE = value;
            settings.BORDER_RADIUS_TOP_LEFT_ANGLE = value;
            settings.BORDER_RADIUS_BOTTOM_RIGHT_ANGLE = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_MARGIN_VERTICAL(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.MARGIN_TOP = value;
            settings.MARGIN_BOTTOM = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_MARGIN(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.MARGIN_LEFT = value;
            settings.MARGIN_BOTTOM = value;
            settings.MARGIN_RIGHT = value;
            settings.MARGIN_TOP = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_PADDING(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.PADDING_RIGHT = value;
            settings.PADDING_LEFT = value;
            settings.PADDING_TOP = value;
            settings.PADDING_BOTTOM = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_BORDER_STYLE(value: string): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.BORDER_LEFT_STYLE = value;
            settings.BORDER_BOTTOM_STYLE = value;
            settings.BORDER_TOP_STYLE = value;
            settings.BORDER_RIGHT_STYLE = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_BORDER_WIDTH(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.BORDER_RIGHT_WIDTH = value;
            settings.BORDER_BOTTOM_WIDTH = value;
            settings.BORDER_LEFT_WIDTH = value;
            settings.BORDER_TOP_WIDTH = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_BORDER_RADIUS_BOTTOM(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.BORDER_RADIUS_BOTTOM_RIGHT_ANGLE = value;
            settings.BORDER_RADIUS_BOTTOM_LEFT_ANGLE = value;
            return settings;
        }
    }
}

export function CHANGE_CONTAINER_SET_BORDER_RADIUS_TOP(value: number): IContainerSettingsChange{
    return {
        change(settings: ContainerSettings): ContainerSettings {
            settings.BORDER_RADIUS_TOP_RIGHT_ANGLE = value;
            settings.BORDER_RADIUS_TOP_LEFT_ANGLE = value;
            return settings;
        }
    }
}