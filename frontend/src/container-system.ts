class ContainerSettingsBase{
    public setProperty(name: string, value: any): void{
        const properties = Object.keys(this);
        if (properties.includes(name)){
            this[name] = value;
        } else {
            throw new RangeError("Name of property is not valid");
        }
    }
    public getProperty(name: string): any{
        const properties = Object.keys(this);
        if (properties.includes(name)){
            return this[name];
        } else {
            throw new RangeError("Name of property is not valid");
        }
    }
    public getPropertyAsNumber(name: string): number{
        return this.getProperty(name) as number;
    }
    public getPropertyAsString(name: string): string{
        return this.getProperty(name) as string;
    }
    public getPropertyAsBoolean(name: string): boolean{
        return this.getProperty(name) as boolean;
    }
    public getPropertyAsMap_String_String(name: string): Map<string, string>{
        return this.getProperty(name) as Map<string, string>;
    }
}

class BorderRadiusSettings extends ContainerSettingsBase{
    BORDER_RADIUS_TOP_LEFT_ANGLE: number = 0
    BORDER_RADIUS_TOP_RIGHT_ANGLE: number = 0
    BORDER_RADIUS_BOTTOM_LEFT_ANGLE: number = 0
    BORDER_RADIUS_BOTTOM_RIGHT_ANGLE: number = 0
}

class BorderWidthSettings extends BorderRadiusSettings{
    BORDER_TOP_WIDTH: number = 1
    BORDER_RIGHT_WIDTH: number = 1
    BORDER_BOTTOM_WIDTH: number = 1
    BORDER_LEFT_WIDTH: number = 1
}

class BorderStyleSettings extends BorderWidthSettings{
    BORDER_TOP_STYLE: string = "none"
    BORDER_LEFT_STYLE: string = "none"
    BORDER_BOTTOM_STYLE: string = "none"
    BORDER_RIGHT_STYLE: string = "none"
}

class PaddingSettings extends BorderStyleSettings{
    PADDING_TOP: number = 0
    PADDING_BOTTOM: number = 0
    PADDING_LEFT: number = 0
    PADDING_RIGHT: number = 0
}

class ChildItemsSettings extends PaddingSettings{
    HORIZONTAL_CHILD_LOCATION: boolean = false
}

class MarginSettings extends ChildItemsSettings{
    MARGIN_TOP: number = 0
    MARGIN_LEFT: number = 0
    MARGIN_RIGHT: number = 0
    MARGIN_BOTTOM: number = 0
}

class SelfAlignSettings extends MarginSettings{
    SELF_ALIGNMENT: string = "top-left"
}

class BackgroundSettings extends SelfAlignSettings{
    STATE: string = "DEFAULT"
    BACKGROUND_MAP: Map<string, string> = new Map<string, string>(Object.entries({"DEFAULT": "one-color"}))

    public BACKGROUND_TYPE(): string{
        return this.BACKGROUND_MAP.get(this.STATE);
    }
}

class ColorSetSettings extends BackgroundSettings{
    THEME_COLOR: string = "PARENT"
    THEME_MODE: string = "PARENT"
    CONTAINER_TYPE: string = "PARENT"
    SUB_CONTAINER_TYPE: string = "PARENT"

    protected CONTAINER_TYPE_FROM_PARENT(parentValue: string): string{
        switch (parentValue){
            case "PRIMARY":
                return "SECONDARY";
            case "SECONDARY":
                return "TERTIARY";
            case "TERTIARY":
                return "PRIMARY";
            case "NONE":
                return "PRIMARY";
            case "NAVBAR":
                return "PRIMARY";
            default:
                return parentValue;
        }
    }

    public COLOR_SET(parentThemeColor: string, parentThemeMode: string, parentContainerType: string, parentSubContainerType: string): Map<string, string>{
        let result: Map<string, string> = new Map<string, string>();
        if (this.THEME_COLOR == "PARENT"){
            result.set("THEME_COLOR", parentThemeColor);
        } else {
            result.set("THEME_COLOR", this.THEME_COLOR);
        }
        if (this.THEME_MODE == "PARENT"){
            result.set("THEME_MODE", parentThemeMode);
        } else {
            result.set("THEME_MODE", this.THEME_MODE);
        }
        if (this.SUB_CONTAINER_TYPE == "PARENT"){
            result.set("SUB_CONTAINER_TYPE", parentSubContainerType);
        } else {
            result.set("SUB_CONTAINER_TYPE", this.SUB_CONTAINER_TYPE);
        }
        if (this.CONTAINER_TYPE == "PARENT"){
            result.set("CONTAINER_TYPE", parentContainerType);
        } else if (this.CONTAINER_TYPE == "AUTO"){
            result.set("CONTAINER_TYPE", this.CONTAINER_TYPE_FROM_PARENT(parentContainerType));
        } else {
            result.set("CONTAINER_TYPE", this.CONTAINER_TYPE);
        }
        return result;
    }
}

class ContainerSettings extends ColorSetSettings{

}