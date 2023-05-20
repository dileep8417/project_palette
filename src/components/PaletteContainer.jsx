import '../styles/PaletteContainer.css';
import PaletteCards from './PaletteCards';
import { useDispatch } from 'react-redux';
import { showAddProjectModal } from '../features/modals/modalSlice';

const PaletteContainer = () => {
    const dispatch = useDispatch();

    function showCreateProjectModal() {
        dispatch(showAddProjectModal());
    }

    return (
        <div className="content">
            <button className="create_palette_btn" onClick={showCreateProjectModal}>Create Palette</button>
            <PaletteCards />
        </div>
    );
}

export default PaletteContainer;