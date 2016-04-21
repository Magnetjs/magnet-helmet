import Base from 'magnet-core/dist/base';
import helmet from 'koa-helmet';
import defaultConfig from './config/helmet';

export default class Helmet extends Base {
  async setup() {
    const list = [
      'contentSecurityPolicy', 'hidePoweredBy', 'hpkp', 'hsts',
      'ieNoOpen', 'noCache', 'noSniff', 'frameguard', 'xssFilter'
    ];

    const config = Object.assign(defaultConfig, this.config.helmet);

    for (const item of list) {
      if (config[item]) {
        this.app.application.use(helmet[item](config[item]));
      } else {
        this.app.application.use(helmet[item]());
      }
    }
  }
}
