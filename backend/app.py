from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import qrcode
import io

app = Flask(__name__)
CORS(app)

@app.route('/api/qr/url', methods=['POST'])
def url():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    url = data.get('url')
    color = data.get('color', 'black')
    bgColor = data.get('bgColor', 'white')
    if not url:
        return jsonify({'error': 'URL not provided'}), 400
    
    qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color=color, back_color=bgColor)
    
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)
    
    return send_file(img_byte_arr, mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)