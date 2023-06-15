import './index.scss';

import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Column, Divider, Icon, Menu, Row, TrteislyMenu } from '../src';
import ButtonOverview from './button';
import IconOverview from './icon';

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<TrteislyMenu>();

  useEffect(() => {
    ref.current.setSelected(location.pathname);
  }, [location]);

  return (
    <Row style={{ width: '100%', height: '100%' }} align="flex-start">
      <Column className="component" justify="start">
        <Menu ref={ref}>
          <Menu.Group title="Components Overview" />
          <Divider title="General" />
          <Menu.Group menuKey="/icon" title="Icon" icon={<Icon.Apps />} onClick={() => navigate('/icon')} />
          <Menu.Group title="Typography" icon={<Icon.Text />} />
          <Menu.Group title="Elevation" icon={<Icon.LayerTwo />} />
          <Divider title="Layout" />
          <Menu.Group title="Row" icon={<Icon.DragDropVertical />} />
          <Menu.Group title="Column" icon={<Icon.DragDropHorizontal />} />
          <Menu.Group title="Space" icon={<Icon.LayerAlignHorizontal />} />
          <Divider title="Navigation" />
          <Menu.Group title="Menu" icon={<Icon.Menu />} />
          <Divider title="Feedback" />
          <Menu.Group title="Alert" icon={<Icon.Alert />} />
          <Menu.Group
            menuKey="/button"
            title="Button"
            icon={<Icon.ViewLayoutBottom />}
            onClick={() => navigate('/button')}
          />
        </Menu>
      </Column>
      <Column style={{ padding: '40px 64px', flex: 1 }} align="stretch">
        <Routes>
          <Route path="icon" element={<IconOverview />} />
          <Route path="button" element={<ButtonOverview />} />
        </Routes>
      </Column>
    </Row>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
