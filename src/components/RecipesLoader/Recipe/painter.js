
export default function  painter() {

    const tRgb = []
    function color() {
        return (Math.floor(Math.random() * 55) +100)
    }

        tRgb.push(color())
        tRgb.push(color())
        tRgb.push(color())
        
        
    return tRgb
}