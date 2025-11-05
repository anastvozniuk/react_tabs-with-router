import { Outlet, NavLink, useParams } from 'react-router-dom';

const tabs = [
  { id: 'one', title: 'Tab 1', content: 'Content of Tab 1' },
  { id: 'two', title: 'Tab 2', content: 'Content of Tab 2' },
  { id: 'three', title: 'Tab 3', content: 'Content of Tab 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1>Tabs Page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={tabId === tab.id ? 'is-active' : ''}>
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>

      <Outlet />
    </>
  );
};
