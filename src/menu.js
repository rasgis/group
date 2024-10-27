import { Menu } from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
      super(selector);

      document.addEventListener('contextmenu', event => {
        event.preventDefault();
        this.open(event.pageX, event.pageY);
      });

      document.addEventListener('click', () => {
        this.close();
      });
    }
  
    open(x, y) {
        const menuWidth = this.el.offsetWidth;
        const menuHeight = this.el.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
    
        if (x + menuWidth > screenWidth) {
          x = screenWidth - menuWidth;
        }
        if (y + menuHeight > screenHeight) {
          y = screenHeight - menuHeight;
        }
    
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;
        this.el.style.display = 'block';
        requestAnimationFrame(() => {
            this.el.classList.add('open');
        });
    }
  
    close() {
      this.el.classList.remove('open');
      setTimeout(() => {
        this.el.style.display = 'none';
      }, 900);
    }

    add(...items) {
      items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');
        menuItem.id = item.type
        menuItem.textContent = item.text;
        this.el.appendChild(menuItem);
        
        menuItem.addEventListener('click', () => {
          item.trigger();
          this.close();
        })
      })
    }
}
