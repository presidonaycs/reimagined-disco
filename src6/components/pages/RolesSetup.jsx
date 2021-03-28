import React, { useEffect, useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { GiTrashCan } from 'react-icons/gi';
import { RiAddLine } from 'react-icons/ri';
import SearchInput from '../inputs/SearchInput';
import LocationDetails from '../layouts/LocationDetails';
import RoleForm from '../layouts/RoleForm';


const RolesSetup = ({ history }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Roles Setup';

    setDetails([
      {
        id: 1,
        role: 'Director, Ministry of Works and Housing',
        description: 'This role for you to direct the affairs of your ministry. Thank you',
        lastUpdated: '20:11:2020 / 14:05:23PM',
        updatedBy: 'Ugochukwu Ajalla'
      },
      {
        id: 2,
        role: 'Director, Ministry of Finance',
        description: 'This role for you to direct the affairs of your ministry. Thank you',
        lastUpdated: '20:11:2020 / 14:05:23PM',
        updatedBy: 'Ugochukwu Ajalla'
      },
      {
        id: 3,
        role: 'Director, Ministry of Youth and Sports',
        description: 'This role for you to direct the affairs of your ministry. Thank you',
        lastUpdated: '20:11:2020 / 14:05:23PM',
        updatedBy: 'Ugochukwu Ajalla'
      },
      {
        id: 4,
        role: 'Director, Ministry of Digital Infrastructure',
        description: 'This role for you to direct the affairs of your ministry. Thank you',
        lastUpdated: '20:11:2020 / 14:05:23PM',
        updatedBy: 'Ugochukwu Ajalla'
      }
    ]);
  }, []);

  const showEditForm = (id) => {
    const selected = details.filter((item) => id === item.id);

    if (selected.length > 0) {
      setSelectedRecord(selected[0]);
      setShowFormModal(true);
    }
  };

  const closeModal = () => {
    setSelectedRecord([]);
    setShowFormModal(false);
  };

  return (
    <div className="w-100">
      <div className="w-100 flex space-between flex-v-center">
        <h2>Global System Administrator</h2>
        <LocationDetails />
      </div>
      <div className="w-100 flex space-between flex-v-center m-t-20">
        <h4 className="san-sherif">Create Role</h4>
        <SearchInput placeholder="Search list..." />
      </div>
      <div className="table-view m-t-10">
        <div className="table-header">
          <div className="table-row">
            <div className="th"><p className="san-sherif">Role List</p></div>
            <div className="th"><p className="san-sherif">Last Updated</p></div>
            <div className="th"><p className="san-sherif">Last Updated By</p></div>
            <div className="th">
              <button className="add-button pointer" type="button" onClick={() => setShowFormModal(true)}>
                <RiAddLine />
                Add Role
              </button>
            </div>
          </div>
        </div>
        <div className="table-body">
          {details.map((item) => (
            <div className="table-row" key={item.id}>
              <div className="td">{item.role}</div>
              <div className="td">{item.lastUpdated}</div>
              <div className="td">{item.updatedBy}</div>
              <div className="td actions">
                <button type="button" className="pointer" onClick={() => showEditForm(item.id)}>
                  <BiEditAlt />
                </button>
                <button type="button" className="m-l-10 del pointer">
                  <GiTrashCan />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showFormModal && (
        <RoleForm details={selectedRecord} closeModal={closeModal} />
      )}
    </div>
  );
};

export default RolesSetup;
