import requests
import random
import time
from datetime import datetime

# ==========================================
# CLEARBLADE CONFIG
# ==========================================

SYSTEM_KEY = ""
SYSTEM_SECRET = ""

EMAIL = "simulator@demo.com"
PASSWORD = "abc@123"

BASE_URL = "https://platform.clearblade.com"

# ==========================================
# AUTHENTICATION
# ==========================================

auth_url = f"{BASE_URL}/api/v/1/user/auth"

auth_headers = {
    "ClearBlade-SystemKey": SYSTEM_KEY,
    "ClearBlade-SystemSecret": SYSTEM_SECRET,
    "Content-Type": "application/json"
}

auth_payload = {
    "email": EMAIL,
    "password": PASSWORD
}

response = requests.post(
    auth_url,
    json=auth_payload,
    headers=auth_headers
)

# ==========================================
# CHECK AUTH
# ==========================================

if response.status_code != 200:
    print("Authentication Failed")
    print(response.text)
    exit()

auth_data = response.json()

user_token = auth_data["user_token"]

print("Authenticated Successfully!")
print("=" * 50)

# ==========================================
# COMMON HEADERS
# ==========================================

headers = {
    "ClearBlade-SystemKey": SYSTEM_KEY,
    "ClearBlade-UserToken": user_token,
    "Content-Type": "application/json"
}

# ==========================================
# INSERT FUNCTION
# ==========================================

def insert_into_collection(collection_name, data):

    url = f"{BASE_URL}/api/v/1/collection/{SYSTEM_KEY}/{collection_name}"

    response = requests.post(
        url,
        json=data,
        headers=headers
    )

    print(f"{collection_name} -> {response.status_code}")

    if response.status_code not in [200, 201]:
        print(response.text)

# ==========================================
# MAIN LOOP
# ==========================================

print("Starting IoT Simulation...")
print("=" * 50)

while True:

    timestamp = datetime.now().isoformat()

    # ======================================
    # TEMP SENSOR DATA
    # ======================================

    temp_data = {
        "device_id": "temp_sensor_01",
        "temperature": round(random.uniform(22, 35), 2),
        "timestamp": timestamp
    }

    insert_into_collection(
        "temp_sensor_data",
        temp_data
    )

    # ======================================
    # SMART PLUG DATA
    # ======================================

    plug_data = {
        "device_id": "smart_plug_01",
        "power_state": random.choice(["ON", "OFF"]),
        "watts": round(random.uniform(50, 500), 2),
        "voltage": round(random.uniform(220, 240), 2),
        "timestamp": timestamp
    }

    insert_into_collection(
        "smart_plug_data",
        plug_data
    )

    # ======================================
    # SMART TV DATA
    # ======================================

    tv_data = {
        "device_id": "smart_tv_01",
        "power_state": random.choice(["ON", "OFF"]),
        "channel": random.randint(1, 100),
        "volume": random.randint(10, 80),
        "timestamp": timestamp
    }

    insert_into_collection(
        "smart_tv_data",
        tv_data
    )

    # ======================================
    # CCTV DATA
    # ======================================

    cctv_data = {
        "device_id": "cctv_01",
        "motion_detected": random.choice([True, False]),
        "fps": random.randint(20, 60),
        "timestamp": timestamp
    }

    insert_into_collection(
        "cctv_data",
        cctv_data
    )

    # ======================================
    # SMART METER DATA
    # ======================================

    meter_data = {
        "device_id": "smart_meter_01",
        "kwh_today": round(random.uniform(2, 20), 2),
        "current_load_kw": round(random.uniform(0.5, 5), 2),
        "timestamp": timestamp
    }

    insert_into_collection(
        "smart_meter_data",
        meter_data
    )

    print("\nData Inserted Successfully")
    print("-" * 50)

    # WAIT 10 SECONDS
    time.sleep(10)
