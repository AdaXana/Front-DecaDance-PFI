import styles from './song-board-admin.module.css';
import SongCardAdmin from '../../molecules/SongCardAdmin/SongCardAdmin';
import songService from '../../../services/apiSong';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import AddSongModal from '../Modals/AddSongModal';
import MessageModal from '../Modals/MessageModal';

const SongBoardAdmin = () => {

    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                setError(null);
                const data = await songService.getAllSongs();
                setSongs(data);
            } catch (err) {
                setError(err.response?.data?.message || "Error de conexión al cargar las canciones");
            }
        };
        fetchSongs();
    }, [refreshKey]);

    const filteredSongs = songs.filter(song =>
        song.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeSongs = filteredSongs.filter(song => song.isActive);
    const inactiveSongs = filteredSongs.filter(song => !song.isActive);

    const handleToggleActive = async (idSong, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            await songService.updateStatus(idSong, newStatus);
            setSongs(prevSongs => prevSongs.map(song =>
                song.idSong === idSong ? { ...song, isActive: newStatus } : song
            ));
        } catch (err) {
            alert(err.response?.data?.message || "Error al cambiar el estado");
        }
    };


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [songToDelete, setSongToDelete] = useState(null)

    const openDeleteModal = (idSong) => {
        setSongToDelete(idSong);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
    if (!songToDelete) return;
    try {
        await songService.deleteSong(songToDelete);
        setSongs(prevSongs => prevSongs.filter(song => song.idSong !== songToDelete));
    } catch (err) {
        console.error(err.response?.data?.message || "Error al borrar la canción");
    } finally {
        setIsDeleteModalOpen(false);
        setSongToDelete(null);
    }
};

    return (
        <div className={styles.boardContainer}>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onAddClick={() => setIsModalOpen(true)}
            />
            <AddSongModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSongAdded={() => setRefreshKey(prev => prev + 1)}
            />
            <div className={styles.header}>
                <h3 className={styles.mainTitle}>Lista de Canciones</h3>
                <span className={styles.resultsCount}>{filteredSongs.length} Resultados</span>
            </div>
            {[
                { title: "Activas", list: activeSongs },
                { title: "No Activas", list: inactiveSongs }
            ].map(section => (
                section.list.length > 0 && (
                    <div className={styles.section} key={section.title}>
                        <h4 className={styles.sectionTitle}>{section.title}</h4>
                        <div className={styles.cardList}>
                            {section.list.map(song => (
                                <SongCardAdmin
                                    key={song.idSong}
                                    song={song}
                                    onToggleActive={() => handleToggleActive(song.idSong, song.isActive)}
                                    onDelete={openDeleteModal}
                                    onUpdated={() => setRefreshKey(prev => prev + 1)}
                                />
                            ))}
                        </div>
                    </div>
                )
            ))}
            <MessageModal 
                isOpen={isDeleteModalOpen}
                title="ELIMINAR CANCIÓN"
                message="¿Estás seguro de que quieres borrar esta canción? Esta acción no se puede deshacer."
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                confirmText="ELIMINAR"
                isDestructive={true} 
            />
        </div>
    );
};

export default SongBoardAdmin;