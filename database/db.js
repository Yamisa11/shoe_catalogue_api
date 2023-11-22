
export default function ShoesDB(db) {
    return {
        all: async () => {
            try {
                let allShoe = await db.any('SELECT * FROM shoes');
                return allShoe
            } catch (error) {
                return error
            }
        },

        shoe_name: async (brand) => {
            try {
                return await db.any('SELECT * FROM shoes WHERE shoe_brand = $1', [brand]);
            } catch (error) {
                return error
            }
        },

        allSizes: async (size) => {
            try {
                return await db.any('SELECT * FROM shoes WHERE shoe_size = $1', [size]);
            } catch (error) {
                return error
            }
        },

        filterByColors: async (color) => {
            try {
                let results = await db.any('SELECT * FROM shoes WHERE color = $1', [color]);
                return results
            } catch (error) {
                return error
            }
        },


        getBrandAndSize: async (shoe_size, brand) => {
            try {
                let results = await db.any('SELECT * FROM shoes WHERE shoe_size = $1 AND shoe_brand = $2', [shoe_size, brand]);
                return results;
            } catch (error) {
                return error
            }
        },


    }
}