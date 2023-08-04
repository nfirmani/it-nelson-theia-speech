import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonIaWidget } from './it-nelson-ia-widget';
import { ItNelsonIaContribution } from './it-nelson-ia-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonIaContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonIaContribution);
    bind(ItNelsonIaWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonIaWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonIaWidget>(ItNelsonIaWidget)
    })).inSingletonScope();
});
