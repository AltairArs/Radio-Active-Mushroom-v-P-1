/**
 * GEN__[VARIABLE_NAME] - variable is generated, can't be set
 *
 * @var {number} BORDER_RADIUS_TOP_LEFT_ANGLE - 0...inf | DEFAULT | 0
 * @var {number} BORDER_RADIUS_TOP_RIGHT_ANGLE - 0...inf | DEFAULT | 0
 * @var {number} BORDER_RADIUS_BOTTOM_LEFT_ANGLE - 0...inf | DEFAULT | 0
 * @var {number} BORDER_RADIUS_BOTTOM_RIGHT_ANGLE - 0...inf | DEFAULT | 0
 * @var {number} BORDER_TOP_WIDTH - 0...inf | DEFAULT | 0
 * @var {number} BORDER_RIGHT_WIDTH - 0...inf | DEFAULT | 0
 * @var {number} BORDER_BOTTOM_WIDTH - 0...inf | DEFAULT | 0
 * @var {number} BORDER_LEFT_WIDTH - 0...inf | DEFAULT | 0
 * @var {string} BORDER_TOP_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset | DEFAULT | none
 * @var {string} BORDER_LEFT_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset | DEFAULT | none
 * @var {string} BORDER_BOTTOM_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset | DEFAULT | none
 * @var {string} BORDER_RIGHT_STYLE - none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset | DEFAULT | none
 * @var {number} PADDING_TOP - 0...inf | DEFAULT | 0
 * @var {number} PADDING_BOTTOM - 0...inf | DEFAULT | 0
 * @var {number} PADDING_LEFT - 0...inf | DEFAULT | 0
 * @var {number} PADDING_RIGHT - 0...inf | DEFAULT | 0
 * @var {boolean} HORIZONTAL_CHILD_LOCATION - true, false | DEFAULT | false
 * @var {number} MARGIN_TOP - 0...inf | DEFAULT | 0
 * @var {number} MARGIN_LEFT - 0...inf | DEFAULT | 0
 * @var {number} MARGIN_RIGHT - 0...inf | DEFAULT | 0
 * @var {number} MARGIN_BOTTOM - 0...inf | DEFAULT | 0
 * @var {string} BACKGROUND_TYPE - one-color, ... | DEFAULT | one-color
 * @var {number} SHADOW_VERTICAL_OFFSET - 0...inf | DEFAULT | 0
 * @var {number} SHADOW_HORIZONTAL_OFFSET - 0...inf | DEFAULT | 0
 * @var {number} SHADOW_BLUR - 0...inf | DEFAULT | 0
 * @var {number} SHADOW_STRETCH - 0...inf | DEFAULT | 0
 * @var {string} SELF_ALIGNMENT - none, top-left, top, top-right, right, bottom-right, bottom, bottom-left, left, center | DEFAULT | none
 * @var {boolean} UNSELECTABLE - true, false | DEFAULT | true
 *
 * @var {string} THEME_COLOR - PARENT, ... | DEFAULT | PARENT
 * @var {string} THEME_MODE - DARK, LIGHT, PARENT | DEFAULT | PARENT
 * @var {string} CONTAINER_TYPE - PRIMARY, SECONDARY, TERTIARY, ERROR, NONE, NAVBAR, TOOLTIP, MENU, PARENT, AUTO | DEFAULT | PARENT
 *
 * AUTO - type of container is determined on the basis of the parent:
 *
 * [PARENT] => [CURRENT]
 *
 * PRIMARY => SECONDARY
 *
 * SECONDARY => TERTIARY
 *
 * TERTIARY => PRIMARY
 *
 * ERROR => ERROR
 *
 * NONE => PRIMARY
 *
 * NAVBAR => PRIMARY
 *
 * TOOLTIP => TOOLTIP
 *
 * MENU => MENU
 * @var {string} SUB_CONTAINER_TYPE - INPUT, NONE, INFO, PARENT | DEFAULT | PARENT
 */
class ContainerSettingsBase{

}

class BorderRadiusSettings extends ContainerSettingsBase{
    public BORDER_RADIUS_TOP_LEFT_ANGLE: number = 0
    public BORDER_RADIUS_TOP_RIGHT_ANGLE: number = 0
    public BORDER_RADIUS_BOTTOM_LEFT_ANGLE: number = 0
    public BORDER_RADIUS_BOTTOM_RIGHT_ANGLE: number = 0
}

class BorderWidthSettings extends BorderRadiusSettings{
    public BORDER_TOP_WIDTH: number = 0
    public BORDER_RIGHT_WIDTH: number = 0
    public BORDER_BOTTOM_WIDTH: number = 0
    public BORDER_LEFT_WIDTH: number = 0
}

class BorderStyleSettings extends BorderWidthSettings{
    public BORDER_TOP_STYLE: string = "none"
    public BORDER_LEFT_STYLE: string = "none"
    public BORDER_BOTTOM_STYLE: string = "none"
    public BORDER_RIGHT_STYLE: string = "none"
}

class PaddingSettings extends BorderStyleSettings{
    public PADDING_TOP: number = 0
    public PADDING_BOTTOM: number = 0
    public PADDING_LEFT: number = 0
    public PADDING_RIGHT: number = 0
}

class ChildItemsSettings extends PaddingSettings{
    public HORIZONTAL_CHILD_LOCATION: boolean = false
}

class MarginSettings extends ChildItemsSettings{
    public MARGIN_TOP: number = 0
    public MARGIN_LEFT: number = 0
    public MARGIN_RIGHT: number = 0
    public MARGIN_BOTTOM: number = 0
}

class SelfAlignSettings extends MarginSettings{
    public SELF_ALIGNMENT: string = "none"
}

class BackgroundSettings extends SelfAlignSettings{
    public BACKGROUND_TYPE: string = "one-color"
}

class ColorSetSettings extends BackgroundSettings{
    public THEME_COLOR: string = "PARENT"
    public THEME_MODE: string = "PARENT"
    public CONTAINER_TYPE: string = "PARENT"
    public SUB_CONTAINER_TYPE: string = "PARENT"

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

    public GEN__OVERRIDE_THEME_COLOR(): boolean{
        return this.THEME_COLOR != "PARENT";
    }

    public GEN__OVERRIDE_THEME_MODE(): boolean{
        return this.THEME_MODE != "PARENT";
    }

    public GEN__OVERRIDE_CONTAINER_TYPE(): boolean{
        return this.CONTAINER_TYPE != "PARENT";
    }

    public GEN__OVERRIDE_SUB_CONTAINER_TYPE(): boolean{
        return this.SUB_CONTAINER_TYPE != "PARENT";
    }

    public GEN__THEME_COLOR(parentValue: string): string{
        if (this.THEME_COLOR == "PARENT"){
            return parentValue;
        } else {
            return this.THEME_COLOR;
        }
    }

    public GEN__THEME_MODE(parentValue: string): string{
        if (this.THEME_MODE == "PARENT"){
            return parentValue;
        } else {
            return this.THEME_MODE;
        }
    }

    public GEN__SUB_CONTAINER_TYPE(parentValue: string): string{
        if (this.SUB_CONTAINER_TYPE == "PARENT"){
            return parentValue;
        } else {
            return this.SUB_CONTAINER_TYPE;
        }
    }

    public GEN__CONTAINER_TYPE(parentValue: string): string{
        if (this.CONTAINER_TYPE == "PARENT"){
            return parentValue;
        } else if (this.CONTAINER_TYPE == "AUTO"){
            return this.CONTAINER_TYPE_FROM_PARENT(parentValue);
        } else {
            return this.CONTAINER_TYPE;
        }
    }
}

class ShadowSettings extends ColorSetSettings{
    public SHADOW_VERTICAL_OFFSET: number = 0
    public SHADOW_HORIZONTAL_OFFSET: number = 0
    public SHADOW_BLUR: number = 0
    public SHADOW_STRETCH: number = 0
}

class UnselectableSettings extends ShadowSettings{
    public UNSELECTABLE: boolean = true
}

export class ContainerSettings extends UnselectableSettings{

}

export interface IContainerSettingsChange{
    change(settings: ContainerSettings): ContainerSettings;
}

export interface IContainerSettingsCreate{
    create(): ContainerSettings;
}