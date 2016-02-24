import { jsdom } from 'jsdom'
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

chai.use(chaiImmutable);
