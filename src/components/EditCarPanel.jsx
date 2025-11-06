import { FaTimes, FaCheck } from 'react-icons/fa'

export default function EditCarPanel({ car, onChange, onSave, onClose }) {
  if (!car) return null

  return (
    <aside className="side-panel left overlay">
      <div className="side-header with-actions">
        <span>Изменение машины</span>
        <div className="actions">
          <button className="icon-btn" title="Сохранить" onClick={onSave}><FaCheck /></button>
          <button className="icon-btn" title="Закрыть" onClick={onClose}><FaTimes /></button>
        </div>
      </div>

      <div className="form-group">
        <div className="label">Регистрационный номер</div>
        <input className="field-input outline" value={car.regNumber || ''} onChange={(e)=>onChange({ ...car, regNumber: e.target.value })} />
      </div>

      <div className="form-group">
        <div className="label">GPS-трекер</div>
        <input className="field-input outline" value={car.gpsNumber || ''} onChange={(e)=>onChange({ ...car, gpsNumber: e.target.value })} />
      </div>

      <div className="form-group">
        <div className="label">Медицинская организация</div>
        <input className="field-input outline" value={car.hospital || ''} onChange={(e)=>onChange({ ...car, hospital: e.target.value })} />
      </div>
    </aside>
  )
}
