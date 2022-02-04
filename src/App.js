import './App.css';

import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from "@syncfusion/ej2-react-schedule"

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App() {
  const services = [Day, Week, WorkWeek, Month, Agenda];

  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  return (
    <ScheduleComponent currentView='Month' selectedDate={new Date(2017, 5, 5)}
      eventSettings={{ dataSource: remoteData }}
    >
      <Inject services={ services } />
    </ScheduleComponent>
  );
}

export default App;
