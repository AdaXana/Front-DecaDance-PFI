import { useState } from 'react';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Button from '../../atoms/Button/Button';
import songService from '../../../services/apiSong';
import styles from './add-song-modal.module.css';

const AddSongModal = ({ isOpen, onClose, onSongAdded }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        setIsLoading(true);
        setError(null);
        setResults([]);
        try {
            const data = await songService.searchDeezer(searchQuery);
            if (data.length === 0) {
                setError("No se encontraron canciones.");
            } else {
                setResults(data);
            }
        } catch (err) {
            setError(err.response?.data?.message || "Error al buscar en Deezer");
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddSong = async (songData) => {
        try {
            await songService.createSong(songData);
            onSongAdded();
            setSearchQuery("");
            setResults([]);
            onClose();
        } catch (err) {
            alert(err.response?.data?.message || "Error al guardar la canción. ¿Quizás ya existe?");
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>AÑADIR NUEVA CANCIÓN</h2>
                    <button className={styles.closeBtn} onClick={onClose}>X</button>
                </div>

                <div className={styles.modalBody}>
                    <p className={styles.helpText}>Busca por título o artista en Deezer:</p>
                    
                    <div className={styles.searchSection}>
                        <SearchBar 
                            searchTerm={searchQuery}
                            onSearchChange={setSearchQuery}
                            onAddClick={handleSearch}
                        />
                    </div>

                    {isLoading && <p className={styles.loadingText}>Buscando en Deezer...</p>}
                    {error && <p className={styles.errorText}>{error}</p>}

                    {results.length > 0 && (
                        <div className={styles.resultsContainer}>
                            {results.map((song) => (
                                <div key={song.deezerId} className={styles.resultItem}>
                                    <img src={song.coverUrl} alt="Cover Album" className={styles.resultCover} />
                                    <div className={styles.resultInfo}>
                                        <span className={styles.resultTitle}>{song.title}</span>
                                        <span className={styles.resultArtist}>{song.artist} ({song.year})</span>
                                    </div>
                                    <Button 
                                        text="Añadir" 
                                        BtnClass="primaryBtn"
                                        className={styles.btnSpecific} 
                                        onClick={() => handleAddSong(song)} 
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddSongModal;