# config-newrelic
Gets rid of the dependency of a local `newrelic.js` file and allows you to pass as an object instead.
```
import config from '...';
import newrelic from 'config-newrelic';

newrelic(config);
```
