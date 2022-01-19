import './lib/data/itemAliases';

import * as Sentry from '@sentry/node';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { APIInteraction, GatewayDispatchEvents, MahojiClient } from 'mahoji';
import { join } from 'path';

import { botToken, SENTRY_DSN } from './config';
import { clientOptions } from './lib/config';
import { OldSchoolBotClient } from './lib/structures/OldSchoolBotClient';
import { handleMahojiInteractionResponse } from './mahoji/mahojiSettings';

Chart.register(ChartDataLabels);

if (SENTRY_DSN) {
	Sentry.init({
		dsn: SENTRY_DSN
	});
}

export const mahojiClient = new MahojiClient({
	discordToken: botToken,
	developmentServerID: '342983479501389826',
	applicationID: '829398443821891634',
	storeDirs: [join('dist', 'mahoji')]
});

export const client = new OldSchoolBotClient(clientOptions);
client.on('raw', async event => {
	if (![GatewayDispatchEvents.InteractionCreate].includes(event.t)) return;
	const data = event.d as APIInteraction;
	const result = await mahojiClient.parseInteraction(data);
	if (result) {
		handleMahojiInteractionResponse(result);
	}
});
client.on('ready', client.init);
mahojiClient.start();
client.login(botToken);
