export const round2 = (num: number) =>
 Math.round((num + Number.EPSILON) * 100) / 100

export function convertDocToObj(doc:any) {
    if (!doc?._id) {
        console.error("Document is missing _id:", doc);
        return null; 
    }
    return {
        ...doc,
        _id: doc._id.toString(), 
    };
}

