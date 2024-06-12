
import './Color.css'

function AddColorGrade(grade) {
    if(grade >= 90){
        return 'Grade100-90'
    }else if(grade >= 70){
        return 'Grade80-70'
    }else if(grade >= 60){
        return 'Grade60'
    }else if(grade >= 50){
        return 'Grade50'
    }else if(grade >= 30){
        return 'Grade40-30'
    }else{
        return 'Grade20-0'
    }
}

export default AddColorGrade