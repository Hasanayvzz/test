from flask import Flask, request, jsonify
from math import radians, sin, cos, sqrt, atan2
from sklearn.cluster import KMeans
import pandas as pd
from flask_cors import CORS
# Veri setini yükle
df = pd.read_csv('./il.csv', sep=',')

# Flask uygulamasını oluştur
app = Flask(__name__)
CORS(app)  

# Haversine fonksiyonu
def haversine(lat1, lon1, lat2, lon2):
    # Radyan cinsinden dönüşümler
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    # Haversine formülü
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    distance = 6371 * c  # Dünya yarıçapı: 6371 km
    return distance

# Tahmin fonksiyonu
def predict(input_city):
    # Input city'nin lat ve lon değerlerini al
    input_city_data = df[df['location'] == input_city]
    input_lat = input_city_data['latitude'].values[0]
    input_lon = input_city_data['longitude'].values[0]

    # Distance sütununu hesapla ve ekle
    distances = []
    for index, row in df.iterrows():
        distance = haversine(input_lat, input_lon, row['latitude'], row['longitude'])
        distances.append(distance)

    df['distance'] = distances

    # K-Means kümeleme modelini oluştur
    kmeans = KMeans(n_clusters=7, random_state=0)

    # Verileri kümelere ayır
    df['kmeans_clusters'] = kmeans.fit_predict(df[['distance']])
    cluster = df.loc[df['location'] == input_city, 'kmeans_clusters']
    cluster = cluster.iloc[0]
    cities = df.loc[df['kmeans_clusters'] == cluster, 'location']

    predicted_cities = []
    for c in range(len(cities)):
        if cities.iloc[c] == input_city:
            continue
        else:
            predicted_cities.append(cities.iloc[c])

    return predicted_cities

# POST isteğini işleme
@app.route('/predict', methods=['POST'])
def handle_prediction():
    # POST isteğini al
    data = request.get_json()
    
    # Gelen veriden input_city'yi al
    input_city = data.get('input_city')
    
    # Tahmin işlemini gerçekleştir
    result = predict(input_city)
    
    # Sonucu JSON formatında yanıtla
    return jsonify({'result': result})

# Ana uygulamayı çalıştırma
if __name__ == '__main__':
    app.run(debug=True)
