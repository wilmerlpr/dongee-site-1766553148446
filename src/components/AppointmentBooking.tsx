import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Dog, CheckCircle, AlertCircle } from 'lucide-react';

export default function AppointmentBooking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    phone: '',
    email: '',
    service: 'Consulta General',
    notes: ''
  });

  // Generar horarios de 8am a 5pm (17:00)
  // Última cita de 1 hora comienza a las 16:00 para terminar a las 17:00
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00'
  ];

  const services = [
    'Consulta General',
    'Vacunación',
    'Desparasitación',
    'Peluquería y Baño',
    'Revisión Dental'
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    if (!dateStr) return;

    const dateObj = new Date(dateStr + 'T00:00:00');
    const day = dateObj.getDay();

    // 0 = Domingo, 6 = Sábado
    if (day === 0 || day === 6) {
      setError('Lo sentimos, solo atendemos de Lunes a Viernes.');
      setSelectedDate('');
    } else {
      setError('');
      setSelectedDate(dateStr);
      setSelectedTime(''); // Resetear hora al cambiar fecha
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar al backend
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agenda tu Cita</h2>
          <p className="text-gray-600">Reserva el espacio ideal para la atención de tu mascota en simples pasos.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 p-4 flex justify-between items-center text-sm font-medium text-gray-500 border-b">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-300 text-white'}`}>1</span>
              <span className="hidden sm:inline">Fecha y Hora</span>
            </div>
            <div className="h-1 flex-1 mx-4 bg-gray-200">
              <div className={`h-full bg-primary transition-all duration-300 ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
            </div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-white'}`}>2</span>
              <span className="hidden sm:inline">Datos</span>
            </div>
            <div className="h-1 flex-1 mx-4 bg-gray-200">
              <div className={`h-full bg-primary transition-all duration-300 ${step === 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : ''}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-300 text-white'}`}>3</span>
              <span className="hidden sm:inline">Confirmación</span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {step === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="text-primary" /> Elige la fecha
                  </label>
                  <input 
                    type="date" 
                    min={today}
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                  {error && (
                    <div className="mt-3 flex items-center text-red-500 bg-red-50 p-3 rounded-lg">
                      <AlertCircle size={20} className="mr-2" />
                      {error}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-2">Horario de atención: Lunes a Viernes de 8:00 AM a 5:00 PM.</p>
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Clock className="text-primary" /> Elige la hora disponible
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-lg border font-medium transition-all ${
                            selectedTime === time 
                              ? 'bg-primary text-white border-primary ring-2 ring-primary ring-offset-2' 
                              : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <button 
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-8 py-3 rounded-full font-bold transition-all ${
                      !selectedDate || !selectedTime 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-primary text-white hover:bg-sky-600 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Cita seleccionada:</p>
                    <p className="font-bold text-gray-800">{selectedDate} a las {selectedTime}</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Cambiar
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <User size={16} /> Nombre del Dueño
                    </label>
                    <input 
                      required
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Dog size={16} /> Nombre de la Mascota
                    </label>
                    <input 
                      required
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Servicio</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                    >
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notas Adicionales (Opcional)</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3} 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  >
                    Atrás
                  </button>
                  <button 
                    type="submit"
                    className="w-2/3 bg-primary text-white py-3 rounded-lg font-bold hover:bg-sky-600 shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirmar Cita
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Cita Agendada con Éxito!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Te esperamos el día <span className="font-bold text-gray-800">{selectedDate}</span> a las <span className="font-bold text-gray-800">{selectedTime}</span> para atender a <span className="font-bold text-gray-800">{formData.petName}</span>.
                  Hemos enviado los detalles a tu correo.
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setSelectedDate('');
                    setSelectedTime('');
                    setFormData({...formData, ownerName: '', petName: '', notes: ''});
                  }}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-colors"
                >
                  Agendar otra cita
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}