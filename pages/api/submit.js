export default async function handler(req, res) {
    const submit = false;

    if (req.method === 'GET') {
        if (submit === false) {
            res.json({
                ok: false
            })
        } else {
            res.json({
                ok: true
            })
        }
    }



    if (req.method === 'POST') {
        res.status(200).json({
            ok: true
        })
    }
}
