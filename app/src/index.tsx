import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { App } from '@kobsio/plugin-core';

import applicationsPlugin from '@kobsio/plugin-applications';
import clickhousePlugin from '@kobsio/plugin-clickhouse';
import dashboardsPlugin from '@kobsio/plugin-dashboards';
import elasticsearchPlugin from '@kobsio/plugin-elasticsearch';
import fluxPlugin from '@kobsio/plugin-flux';
import jaegerPlugin from '@kobsio/plugin-jaeger';
import kialiPlugin from '@kobsio/plugin-kiali';
import markdownPlugin from '@kobsio/plugin-markdown';
import opsgeniePlugin from '@kobsio/plugin-opsgenie';
import resourcesPlugin from '@kobsio/plugin-resources';
import rssPlugin from '@kobsio/plugin-rss';
import prometheusPlugin from '@kobsio/plugin-prometheus';
import sqlPlugin from '@kobsio/plugin-sql';
import teamsPlugin from '@kobsio/plugin-teams';
import usersPlugin from '@kobsio/plugin-users';
import helloWorldPlugin from './plugins/helloworld';

ReactDOM.render(
  <React.StrictMode>
    <App plugins={{
      ...resourcesPlugin,
      ...teamsPlugin,
      ...usersPlugin,
      ...applicationsPlugin,
      ...dashboardsPlugin,
      ...prometheusPlugin,
      ...elasticsearchPlugin,
      ...jaegerPlugin,
      ...kialiPlugin,
      ...fluxPlugin,
      ...opsgeniePlugin,
      ...markdownPlugin,
      ...rssPlugin,
      ...clickhousePlugin,
      ...sqlPlugin,
      ...helloWorldPlugin,
    }} />
  </React.StrictMode>,
  document.getElementById('root')
);
