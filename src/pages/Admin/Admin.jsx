import { useState } from 'react';
import UsersIcon from '../../components/atoms/Icons/UsersIcon';
import MusicIcon from '../../components/atoms/Icons/MusicIcon';
import SettingsIcon from '../../components/atoms/Icons/SettingsIcon';
import SegmentedControl from '../../components/molecules/SegmentedControl/SegmentedControl';
import SongBoardAdmin from '../../components/organisms/SongBoardAdmin/SongBoardAdmin';

const Admin = () => {

    const [activeTab, setActiveTab] = useState('music');

    const adminTabs = [
        { id: 'users', label: <><UsersIcon /> Usuarios</> },
        { id: 'music', label: <><MusicIcon /> Música</> },
        { id: 'settings', label: <><SettingsIcon /> Ajustes</> }
    ];
    return (
        <>
            <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>

                <SegmentedControl
                    options={adminTabs}
                    activeOption={activeTab}
                    onChange={setActiveTab}
                />
                {activeTab === 'music' && (
                    <div style={{ marginTop: '24px' }}>
                        <SongBoardAdmin />
                    </div>
                )}
                {/* {activeTab === 'users' && <h2 style={{ color: 'var(--color-text-main)', marginTop: '20px' }}>Usuarios</h2>}
                {activeTab === 'settings' && <h2 style={{ color: 'var(--color-text-main)', marginTop: '20px' }}>Ajustes</h2>} */}

            </div>
        </>
    )
}

export default Admin;