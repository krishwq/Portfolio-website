    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    let sections=document.querySelectorAll('.skill-data');
    function set() {
      if (rs.getPropertyValue('--white') == '#ffeecc') {
        r.style.setProperty('--white', '#0b2447');
        r.style.setProperty('--black', '#ffeecc');
        r.style.setProperty('--blackborder', '#0b2447');
        r.style.setProperty('--namelight', 'blue');
        
        document.getElementById('id').style.cssText = 'left:22px;'
        document.getElementById('mode').innerHTML = "Light<br>Mode";
      }
      else {
        r.style.setProperty('--white', '#ffeecc');
        r.style.setProperty('--black', '#0b2447');
        r.style.setProperty('--blackborder', '#a5d7eb');
        r.style.setProperty('--namelight', '#febbcc');
        document.getElementById('id').style.cssText = 'left:2px;'
        document.getElementById('mode').innerHTML = "Dark<br>Mode";
      }
    } 
    function showDiv1() {
      document.getElementById('link-work1').style.display = 'block';
      document.getElementById('link-work1').style.overflow = 'scroll';
    }
    function showDiv2() {
      document.getElementById('link-work2').style.display = 'block';
      document.getElementById('link-work2').style.overflow = 'scroll';
    }
    function showDiv3() {
      document.getElementById('link-work3').style.display = 'block';
      document.getElementById('link-work3').style.overflow = 'scroll';
    }
    function hideDiv1() {
      document.getElementById('link-work1').style.display = 'none';
      document.getElementById('link-work1').style.overflow = 'hidden';
    }
    function hideDiv2() {
      document.getElementById('link-work2').style.display = 'none';
      document.getElementById('link-work2').style.overflow = 'hidden';
    }
    function hideDiv3() {
      document.getElementById('link-work3').style.display = 'none';
      document.getElementById('link-work3').style.overflow = 'hidden';
    }
    function showDiv4() {
      document.getElementById('link-work4').style.display = 'block';
      document.getElementById('link-work4').style.overflow = 'scroll';
    }
    function hideDiv4() {
      document.getElementById('link-work4').style.display = 'none';
      document.getElementById('link-work4').style.overflow = 'hidden';
    }
    
    window.onscroll=()=>{
      sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        console.log(top+" "+offset+" "+height)
        if(top>=offset-200 && top<offset+height/2){
          document.getElementById('html').style.width="60%";
          document.getElementById('css').style.width="60%";
          document.getElementById('jscript').style.width="50%";
          document.getElementById('c').style.width="80%";
          document.getElementById('cpp').style.width="70%";
          document.getElementById('py').style.width="20%";
    
          setTimeout(()=>{
          document.getElementById('nhtml').style.opacity="1";
          document.getElementById('ncss').style.opacity="1";
          document.getElementById('nj').style.opacity="1";
          document.getElementById('nc').style.opacity="1";
          document.getElementById('ncpp').style.opacity="1";
          document.getElementById('npy').style.opacity="1";
           },500);
        }
      })
    }