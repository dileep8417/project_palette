import Modal from "./Modal";
import { useSelector } from "react-redux";
import { createProject, addColor, renameProject } from "../features/colorPalettes/colorPaletteSlice";

const Modals = () => {
    const showAddProjectModal = useSelector(state => state.modal.showAddProjectModal);
    const showAddColorModal = useSelector(state => state.modal.showAddColorModal);
    const showUpdateProjectModal = useSelector(state => state.modal.showUpdateProjectModal);
    const selectedPalette = useSelector(state => state.colorPalette.selectedPalette)

    return (
        <div>
            {showAddProjectModal && <Modal title="Add Project Title" placeholder="Money Tracker" btnVal="Create Project" submitAction={createProject} />}
            {showAddColorModal && <Modal title="Add Pallet color" placeholder="#484848" btnVal="Add Pallet" submitAction={addColor} />}
            {showUpdateProjectModal && <Modal title="Update Project Title" value={selectedPalette} btnVal="Update Project" submitAction={renameProject} />}
        </div>
    );
}

export default Modals;