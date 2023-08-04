import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { CommandService, MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
import Dictaphone from './si-speech';

@injectable()
export class ItNelsonIaWidget extends ReactWidget {

 
    static readonly ID = 'it-nelson-ia:widget';
    static readonly LABEL = 'ItNelsonIa Widget';

    @inject(CommandService)
    protected readonly commands: CommandService;

    @inject(MessageService)
    protected readonly messageService!: MessageService;
    

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = ItNelsonIaWidget.ID;
        this.title.label = ItNelsonIaWidget.LABEL;
        this.title.caption = ItNelsonIaWidget.LABEL;
        this.title.closable = true;


        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        const header = `Questo un semplice
        in order to display an info message to end users.`;
        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />

           <Dictaphone/>
            
           
            <button id='displayMessageButton' className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('congratulazione: ItNelsonIa Widget Successfully Created!');
        this.commands.executeCommand('ItNelsonS01.file.dialog');
       
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }

}
