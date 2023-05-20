import { colorCopied, deleteProject, hideColorCopyMsg } from "../features/colorPalettes/colorPaletteSlice";
import { showAddColorModal, showAddProjectModal, showUpdateProjectModal } from "../features/modals/modalSlice";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const PaletteCard = ({id, title, colors }) => {

    const dispatch = useDispatch();

    function showColorModal(title) {
        dispatch(showAddColorModal(title));
    }

    function copyColorCode(colorCode) {
        dispatch(colorCopied(colorCode));
        setTimeout(() => dispatch(hideColorCopyMsg()), 1200);
        navigator.clipboard.writeText(colorCode);
    }

    function removeProject(id) {
        if (confirm('Are u want to delete the project')) {
            dispatch(deleteProject(id));
        }
    }

    function renameProjectTitle(projectTitle) {
        dispatch(showUpdateProjectModal(projectTitle))
    }

    return (
        <div className="palette_card">
            <div className="card_header">
                <div className="project_title">
                    {title}
                    <span className="rename_title"><MdOutlineDriveFileRenameOutline onClick={() => renameProjectTitle(title)} /></span>
                </div>
                <div className="remove_project"><AiOutlineDelete onClick={() => removeProject(id)}/></div>
            </div>
            
            <div className="colors">
                {
                    colors.map(color => {
                        return (
                            <div key={color} className="card">
                                <div className="color added_color" style={{background: color}} onClick={() => copyColorCode(color)}></div>
                                <div className="color_title">{color}</div>
                            </div>
                        )
                    })
                }
                <div className="color add_color" onClick={() => showColorModal(title)}></div>
            </div>
        </div>
    );
}

export default PaletteCard;