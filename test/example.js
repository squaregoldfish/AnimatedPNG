blueBackground = true;
function changeBackground()
    {
    if (blueBackground)
        {
        addCode('getElementById(\'fishAnimDiv\').style.backgroundColor = \'#376797\';');
        self.document.getElementById('fishAnimDiv').style.backgroundColor = '#376797';
        }
    else
        {
        addCode('getElementById(\'fishAnimDiv\').style.backgroundColor = \'#2323A3\';');
        self.document.getElementById('fishAnimDiv').style.backgroundColor = '#2323A3';
        }
        
    blueBackground = !blueBackground;
    }

    
function addCustomDelays()
    {
    addCode('fishAnim.setFrameDelay(3, 500);<br/>fishAnim.setFrameDelay(15, 500);');
    fishAnim.setFrameDelay(3, 500);
    fishAnim.setFrameDelay(15, 500);
    }
    
function disableCustomDelays()
    {
    addCode('fishAnim.setFrameDelay(3, 100);<br/>fishAnim.setFrameDelay(15, 100);');
    fishAnim.setFrameDelay(3, 100);
    fishAnim.setFrameDelay(15, 100);
    }
    
function disableRepeat()
    {
    addCode('fishAnim.setRepeat(false);');
    fishAnim.setRepeat(false);
    }

function enableRepeat()
    {
    addCode('fishAnim.setRepeat(true);');
    fishAnim.setRepeat(true);
    }

function startAnimation()
    {
    addCode('fishAnim.startAnimation();');
    fishAnim.startAnimation();
    }
    
function stopAnimation()
    {
    addCode('fishAnim.stopAnimation();');
    fishAnim.stopAnimation();
    }
    
function addCode(codeString)
    {
    var codeLog = self.document.getElementById('codeLog');
    codeLog.innerHTML = codeString;
    }
