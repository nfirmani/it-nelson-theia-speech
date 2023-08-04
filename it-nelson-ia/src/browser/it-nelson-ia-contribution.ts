import { injectable } from '@theia/core/shared/inversify';
import { MAIN_MENU_BAR, MenuModelRegistry } from '@theia/core';
import { ItNelsonIaWidget } from './it-nelson-ia-widget';
import { AbstractViewContribution, codicon } from '@theia/core/lib/browser';
import { Command, CommandRegistry } from '@theia/core/lib/common/command';

//export const ItNelsonIaCommand: Command = { id: 'it-nelson-ia:command' };

export const TEST_SPEECH: Command = {
    id: 'ItNelsonIa.test.speech',
    label: 'test speech',
    iconClass: codicon('eye')
};


export namespace MenusSpeech {

    export const ES_SPEECH = [...MAIN_MENU_BAR, '1_esSpeech'];
    export const ES_TEST_SPEECH = [...ES_SPEECH, 'gr2'];
 //   export const ES_FILE_SETTINGS_SUBMENU = [...ES_FILE_SETTINGS, '1_essettings_submenu'];
 //   export const ES_FILE_SETTINGS_SUBMENU_OPEN = [...ES_FILE_SETTINGS_SUBMENU, '1_essettings_submenu_open'];
 //   export const ES_FILE_SETTINGS_SUBMENU_THEME = [...ES_FILE_SETTINGS_SUBMENU, '2_essettings_submenu_theme'];
 //   export const ES_FILE_CLOSE = [...ES_FILE, '6_esclose'];
}

@injectable()
export class ItNelsonIaContribution extends AbstractViewContribution<ItNelsonIaWidget> {

    /**
     * `AbstractViewContribution` handles the creation and registering
     *  of the widget including commands, menus, and keybindings.
     * 
     * We can pass `defaultWidgetOptions` which define widget properties such as 
     * its location `area` (`main`, `left`, `right`, `bottom`), `mode`, and `ref`.
     * 
     */
    constructor() {
        super({
            widgetId: ItNelsonIaWidget.ID,
            widgetName: ItNelsonIaWidget.LABEL,
            defaultWidgetOptions: { area: 'left' },
            toggleCommandId: TEST_SPEECH.id
        });
    }

    /**
     * Example command registration to open the widget from the menu, and quick-open.
     * For a simpler use case, it is possible to simply call:
     ```ts
        super.registerCommands(commands)
     ```
     *
     * For more flexibility, we can pass `OpenViewArguments` which define 
     * options on how to handle opening the widget:
     * 
     ```ts
        toggle?: boolean
        activate?: boolean;
        reveal?: boolean;
     ```
     *
     * @param commands
     */
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(TEST_SPEECH, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
    }

    /**
     * Example menu registration to contribute a menu item used to open the widget.
     * Default location when extending the `AbstractViewContribution` is the `View` main-menu item.
     * 
     * We can however define new menu path locations in the following way:
     ```ts
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: 'id',
            label: 'label'
        });
     ```
     * 
     * @param menus
     */
    registerMenus(menus: MenuModelRegistry): void {
        super.registerMenus(menus);

        menus.registerSubmenu(MenusSpeech.ES_SPEECH, 'Speech-Recognition');

        menus.registerMenuAction(MenusSpeech.ES_TEST_SPEECH, {
            commandId: TEST_SPEECH.id           
        });
   

    }
}
