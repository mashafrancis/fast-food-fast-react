import expect from 'expect';
import configureStore from './confugureStore.dev';


describe("Test store creation", () => {
  it('should be an instance of store', function () {
    let store = configureStore();
    expect(store.getState()).toBeDefined();
  });
});
