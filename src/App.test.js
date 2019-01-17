import App from './App';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  xit('renders an `.App-header`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).to.have.lengthOf(1);
  });

  xit('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="App"></div>
      </App>
    ));
    expect(wrapper.contains(<div className="App"/>)).toEqual(true);
  });


});
