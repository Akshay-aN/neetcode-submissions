interface TimeValueRecord {
    timestamp: number;
    value: string;
}

class TimeMap {
    // Maps each string key to an array of sorted timestamp-value records
    private store: Map<string, TimeValueRecord[]>;

    constructor() {
        this.store = new Map<string, TimeValueRecord[]>();
    }

    /**
     * Stores the key with the value at the given timestamp.
     * Assumes incoming timestamps are strictly increasing per key.
     * Time Complexity: O(1)
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        
        // Since timestamps are strictly increasing, appending preserves sorting
        this.store.get(key)!.push({ timestamp, value });
    }

    /**
     * Returns the value associated with the largest timestamp_prev <= timestamp.
     * Returns an empty string if no such value exists.
     * Time Complexity: O(log N) where N is the number of values for the key.
     */
    get(key: string, timestamp: number): string {
        // If the key doesn't exist, return an empty string
        if (!this.store.has(key)) {
            return "";
        }

        const records = this.store.get(key)!;
        let left = 0;
        let right = records.length - 1;
        let result = "";

        // Binary search to find the upper bound timestamp <= target
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (records[mid].timestamp === timestamp) {
                return records[mid].value;
            }

            if (records[mid].timestamp < timestamp) {
                result = records[mid].value; // Mid is a potential candidate
                left = mid + 1;             // Look for a closer/larger timestamp
            } else {
                right = mid - 1;            // Mid timestamp is too large
            }
        }

        return result;
    }
}