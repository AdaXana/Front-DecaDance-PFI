import styles from './song-card-admin.module.css';
import Cover from '../../atoms/Cover/Cover';
import SongIcon from '../../atoms/Icons/SongIcon';
import PenIcon from '../../atoms/Icons/PenIcon';
import TrashIcon from '../../atoms/Icons/TrashIcon';
import { NEON_COLORS } from '../../../data/NeonColors';
import { useState } from 'react';
import apiSong from '../../../services/apiSong';


const SongCardAdmin = ({ song, onToggleActive, onUpdated, onDelete }) => {
    const { idSong, title, artist, year, coverUrl, isActive } = song;

    const assignedNeon = NEON_COLORS[idSong % NEON_COLORS.length];

    const [editTitle, setEditTitle] = useState(song.title);
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const [editArtist, setEditArtist] = useState(song.artist);
    const [isEditingArtist, setIsEditingArtist] = useState(false);

    const [editYear, setEditYear] = useState(song.year);
    const [isEditingYear, setIsEditingYear] = useState(false);

    const handleUpdateField = async (field, value, originalValue, setIsEditing, updateMethod) => {
    if (value === originalValue) {
        setIsEditing(false);
        return;
    }
    try {
        await updateMethod(idSong, value);
        if (onUpdated) {
            onUpdated();
        }
        setIsEditing(false);
    } catch (error) {
        const serverMessage = error.response?.data?.message || `Error al actualizar ${field}`;
        console.error(serverMessage);
        if (field === 'título') setEditTitle(originalValue);
        if (field === 'artista') setEditArtist(originalValue);
        if (field === 'año') setEditYear(originalValue);
        setIsEditing(false);
    }
};

    const activeStyle = isActive ? {
        borderLeftColor: assignedNeon,
        boxShadow: `-4px 0px 10px -2px ${assignedNeon}`
    } : {

    };

    return (
        <div
            className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
            style={activeStyle}
        >
            <div className={styles.leftContent}>
                <div className={styles.coverWrapper}>
                    <Cover src={coverUrl} alt={`${title} cover`} size="small" />
                </div>

                <div className={styles.textContent}>
                    {isEditingTitle ? (
                        <input
                            className={styles.editInput}
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            onBlur={() => handleUpdateField('título', editTitle, title, setIsEditingTitle, apiSong.updateTitle)}
                            onKeyDown={(e) => e.key === 'Enter' && handleUpdateField('título', editTitle, title, setIsEditingTitle, apiSong.updateTitle)}
                            autoFocus
                        />
                    ) : (
                        <h4 className={styles.title} onClick={() => setIsEditingTitle(true)}>
                            {editTitle}
                        </h4>
                    )}
                    <div className={styles.subtitleContainer}>
                        {isEditingArtist ? (
                            <input
                                className={styles.editInputSmall}
                                value={editArtist}
                                onChange={(e) => setEditArtist(e.target.value)}
                                onBlur={() => handleUpdateField('artista', editArtist, artist, setIsEditingArtist, apiSong.updateArtist)}
                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateField('artista', editArtist, artist, setIsEditingArtist, apiSong.updateArtist)}
                                autoFocus
                            />
                        ) : (
                            <span className={styles.subtitle} onClick={() => setIsEditingArtist(true)}>
                                {editArtist}
                            </span>
                        )}
                        <span className={styles.separator}> • </span>
                        {isEditingYear ? (
                            <input
                                className={styles.editInputYear}
                                type="number"
                                value={editYear}
                                onChange={(e) => setEditYear(e.target.value)}
                                onBlur={() => handleUpdateField('año', editYear, year, setIsEditingYear, apiSong.updateYear)}
                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateField('año', editYear, year, setIsEditingYear, apiSong.updateYear)}
                                autoFocus
                            />
                        ) : (
                            <span className={styles.subtitle} onClick={() => setIsEditingYear(true)}>
                                {editYear}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <SongIcon
                    isActive={isActive}
                    toggleActive={() => onToggleActive(idSong)}
                />
                <PenIcon onClick={() => setIsEditingTitle(true)} />
                <TrashIcon onClick={() => onDelete(idSong)} />
            </div>
        </div>
    );
};

export default SongCardAdmin;