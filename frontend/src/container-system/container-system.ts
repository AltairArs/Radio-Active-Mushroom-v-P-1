/**
 * @var {number} BORDER_RADIUS_TOP_LEFT_ANGLE - 0...inf
 * @var {number} BORDER_RADIUS_TOP_RIGHT_ANGLE - 0...inf
 * @var {number} BORDER_RADIUS_BOTTOM_LEFT_ANGLE - 0...inf
 * @var {number} BORDER_RADIUS_BOTTOM_RIGHT_ANGLE - 0...inf
 * @var {number} BORDER_TOP_WIDTH - 0...inf
 * @var {number} BORDER_RIGHT_WIDTH - 0...inf
 * @var {number} BORDER_BOTTOM_WIDTH - 0...inf
 * @var {number} BORDER_LEFT_WIDTH - 0...inf
 * @var {string} BORDER_TOP_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
 * @var {string} BORDER_LEFT_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
 * @var {string} BORDER_BOTTOM_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
 * @var {string} BORDER_RIGHT_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
 * @var {number} PADDING_TOP - 0...inf
 * @var {number} PADDING_BOTTOM - 0...inf
 * @var {number} PADDING_LEFT - 0...inf
 * @var {number} PADDING_RIGHT - 0...inf
 * @var {boolean} HORIZONTAL_CHILD_LOCATION - true, false
 * @var {number} MARGIN_TOP - 0...inf
 * @var {number} MARGIN_LEFT - 0...inf
 * @var {number} MARGIN_RIGHT - 0...inf
 * @var {number} MARGIN_BOTTOM - 0...inf
 * @var {string} BACKGROUND_TYPE - one-color, ...
 * @var {number} SHADOW_VERTICAL_OFFSET - 0...inf
 * @var {number} SHADOW_HORIZONTAL_OFFSET - 0...inf
 * @var {number} SHADOW_BLUR - 0...inf
 * @var {number} SHADOW_STRETCH - 0...inf
 * @var {string} SELF_ALIGNMENT - top-left, top, top-right, right, bottom-right, bottom, bottom-left, left, center
 * @var {boolean} UNSELECTABLE - true, false
 *
 * @var {string} THEME_COLOR - PARENT, ...
 * @var {string} THEME_MODE - DARK, LIGHT, PARENT
 * @var {string} CONTAINER_TYPE - PRIMARY, SECONDARY, TERTIARY, ERROR, NONE, NAVBAR, TOOLTIP, MENU, PARENT, AUTO
 * @var {string} SUB_CONTAINER_TYPE - INPUT, NONE, INFO, PARENT
 */
class ContainerSettingsBase{
    public setProperty(name: string, value: any): void{
        const properties = Object.keys(this);
        if (properties.includes(name)){
            this[name as keyof ContainerSettingsBase] = value;
        } else {
            throw new RangeError("Name of property is not valid");
        }
    }
    private getProperty(name: string): any{
        const properties = Object.keys(this);
        if (properties.includes(name)){
            return this[name as keyof ContainerSettingsBase];
        } else {
            throw new RangeError("Name of property is not valid");
        }
    }
    public getPropertyAsNumber(name: string, _parentValue?: number): number{
        return this.getProperty(name) as number;
    }
    public getPropertyAsString(name: string, _parentValue?: string): string{
        return this.getProperty(name) as string;
    }
    public getPropertyAsBoolean(name: string, _parentValue?: boolean): boolean{
        return this.getProperty(name) as boolean;
    }
}

class BorderRadiusSettings extends ContainerSettingsBase{
    protected BORDER_RADIUS_TOP_LEFT_ANGLE: number = 0
    protected BORDER_RADIUS_TOP_RIGHT_ANGLE: number = 0
    protected BORDER_RADIUS_BOTTOM_LEFT_ANGLE: number = 0
    protected BORDER_RADIUS_BOTTOM_RIGHT_ANGLE: number = 0
}

class BorderWidthSettings extends BorderRadiusSettings{
    protected BORDER_TOP_WIDTH: number = 1
    protected BORDER_RIGHT_WIDTH: number = 1
    protected BORDER_BOTTOM_WIDTH: number = 1
    protected BORDER_LEFT_WIDTH: number = 1
}

class BorderStyleSettings extends BorderWidthSettings{
    protected BORDER_TOP_STYLE: string = "none"
    protected BORDER_LEFT_STYLE: string = "none"
    protected BORDER_BOTTOM_STYLE: string = "none"
    protected BORDER_RIGHT_STYLE: string = "none"
}

class PaddingSettings extends BorderStyleSettings{
    protected PADDING_TOP: number = 0
    protected PADDING_BOTTOM: number = 0
    protected PADDING_LEFT: number = 0
    protected PADDING_RIGHT: number = 0
}

class ChildItemsSettings extends PaddingSettings{
    protected HORIZONTAL_CHILD_LOCATION: boolean = false
}

class MarginSettings extends ChildItemsSettings{
    protected MARGIN_TOP: number = 0
    protected MARGIN_LEFT: number = 0
    protected MARGIN_RIGHT: number = 0
    protected MARGIN_BOTTOM: number = 0
}

class SelfAlignSettings extends MarginSettings{
    protected SELF_ALIGNMENT: string = "top-left"
}

class BackgroundSettings extends SelfAlignSettings{

    protected BACKGROUND_TYPE: string = "one-color"
}

class ColorSetSettings extends BackgroundSettings{
    protected THEME_COLOR: string = "PARENT"
    protected THEME_MODE: string = "PARENT"
    protected CONTAINER_TYPE: string = "PARENT"
    protected SUB_CONTAINER_TYPE: string = "PARENT"

    private CONTAINER_TYPE_FROM_PARENT(parentValue: string): string{
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
    public getPropertyAsString(name: string, _parentValue?: string): string {
        let parentValue: string = "";
        if (_parentValue != null)
            parentValue = _parentValue;
        switch (name){
            case "THEME_COLOR":
                if (this.THEME_COLOR == "PARENT"){
                    return parentValue;
                } else {
                    return this.THEME_COLOR;
                }
            case "THEME_MODE":
                if (this.THEME_MODE == "PARENT"){
                    return parentValue;
                } else {
                    return this.THEME_MODE;
                }
            case "SUB_CONTAINER_TYPE":
                if (this.SUB_CONTAINER_TYPE == "PARENT"){
                    return parentValue;
                } else {
                    return this.SUB_CONTAINER_TYPE;
                }
            case "CONTAINER_TYPE":
                if (this.CONTAINER_TYPE == "PARENT"){
                    return parentValue;
                } else if (this.CONTAINER_TYPE == "AUTO"){
                    return this.CONTAINER_TYPE_FROM_PARENT(parentValue);
                } else {
                    return this.CONTAINER_TYPE;
                }
            default:
                return super.getPropertyAsString(name, _parentValue);
        }
    }
}

class ShadowSettings extends ColorSetSettings{
    protected SHADOW_VERTICAL_OFFSET: number = 0
    protected SHADOW_HORIZONTAL_OFFSET: number = 0
    protected SHADOW_BLUR: number = 0
    protected SHADOW_STRETCH: number = 0
}

class UnselectableSettings extends ShadowSettings{
    protected UNSELECTABLE: boolean = true
}

export class ContainerSettings extends UnselectableSettings{

}

export interface IContainerSettings{
    change?(settings: ContainerSettings): ContainerSettings;
    create?(): ContainerSettings;
}