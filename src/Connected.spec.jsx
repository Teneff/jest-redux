import React from "react";
import Connected from "./Connected";
import store from "./redux/store";
import { shallow } from "enzyme";
import { Provider, ReactReduxContext } from "react-redux";

describe("<Connected />", () => {
  describe("wrapped in <Provider />", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(
        <Provider store={store}>
          <Connected />
        </Provider>
      ).dive();
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("passing options wrappingComponent", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Connected />, {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store,
          context: ReactReduxContext
        }
      });
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("passing context store", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Connected />, {
        context: store,
      });
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
