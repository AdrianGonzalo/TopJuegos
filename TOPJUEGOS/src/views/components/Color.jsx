import './Color.css'

function AddColorGrade(grade) {
    if(grade >= 9){
        return 'Grade100-90'
    }else if(grade >= 7){
        return 'Grade80-70'
    }else if(grade >= 6){
        return 'Grade60'
    }else if(grade >= 5){
        return 'Grade50'
    }else if(grade >= 3){
        return 'Grade40-30'
    }else{
        return 'Grade20-0'
    }
}

export default AddColorGrade