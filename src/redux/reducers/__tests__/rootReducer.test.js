import expect from 'expect';
import rootReducer from '../index';


it("Checks that root reducer is not null",() =>{
    expect(rootReducer).not.toEqual(null);
});
