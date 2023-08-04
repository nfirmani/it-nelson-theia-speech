/**
 * Generated using theia-extension-generator
 */
import { ItNelsonCmdCommandContribution, ItNelsonCmdMenuContribution } from './it-nelson-cmd-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(ItNelsonCmdCommandContribution);
    bind(MenuContribution).to(ItNelsonCmdMenuContribution);
    
});
