import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

def verify_supabase():
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("❌ Connect Failed: Missing SUPABASE_URL or SUPABASE_KEY in .env")
        return False

    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }

    # Try to access the root (or a known table if we knew one, but root usually returns something or 404 which means connected)
    # Better to try listing tables or just checking health if possible.
    # But for a project we might not have tables yet.
    # Supabase REST API root: https://<project_ref>.supabase.co/rest/v1/
    
    try:
        response = requests.get(f"{SUPABASE_URL}/rest/v1/", headers=headers)
        
        # 200 OK or even 404 (if no index) usually means the URL is reachable. 
        # But specifically checking if Key is valid:
        # If Key is invalid, it returns 401 or 403.
        
        if response.status_code in [200, 201, 204]:
            print("✅ Connect Success: Supabase is reachable and Key is valid.")
            return True
        elif response.status_code == 404:
             # It might be 404 if no tables or root not serving
             print(f"⚠️ Warning: Endpoint reachable but returned 404. Check URL. {response.text}")
             return True # Tentative success
        elif response.status_code in [401, 403]:
            print(f"❌ Connect Failed: Invalid API Key. Status: {response.status_code}")
            return False
        else:
            print(f"❌ Connect Failed: Unexpected Status {response.status_code}. {response.text}")
            return False

    except Exception as e:
        print(f"❌ Connect Failed: Exception occurred: {e}")
        return False

if __name__ == "__main__":
    verify_supabase()
