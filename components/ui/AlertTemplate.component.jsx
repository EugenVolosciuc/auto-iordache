const AlertTemplate = ({ style, options, message, close }) => (
	<div className="p-4 bg-gray-200 rounded-lg mt-4 border-2">
		{options.type === 'info' && <i className="fas fa-exclamation fa-lg mr-2 text-yellow-400"></i>}
		{options.type === 'success' && <i className="fas fa-check fa-lg mr-2 text-green-400"></i>}
		{options.type === 'error' && <i className="fas fa-times fa-lg mr-2 text-red-400"></i>}
		{message}
	</div>
)

export default AlertTemplate