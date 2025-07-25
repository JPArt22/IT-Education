
const imageContainer = document.getElementById('imagecont');
const primeroInput = document.getElementById('primero');
const segundoInput = document.getElementById('segundo');
const boton = document.getElementById('boton');
const text = document.getElementById('text');

const cy = cytoscape({
    container: document.getElementById("cy"),
    userZoomingEnabled: false, // Disable zooming on scroll
    elements: [], 
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'blue', 
          'label': 'data(id)'
        }
      },
      {
        selector: 'edge',
        style: {
          'line-color': 'pink', 
        }
      }
    ],
    layout: {
      name: 'cose'
    }
  });


const node = {
    group: 'nodes',
    data: {
        id: 1,
        label: 'Vertex 1',
        className: 'node',
        backgroundImage: 'https://okdiario.com/img/2022/11/22/libros-4.jpg'
    }
};    
const node2 = {
    group: 'nodes',
    data: {
        id: 2,
        label: 'Vertex 2',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node3 = {
    group: 'nodes',
    data: {
        id: 3,
        label: 'Vertex 3',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node4 = {
    group: 'nodes',
    data: {
        id: 4,
        label: 'Vertex 4',
        className: 'node',
        backgroundImage: 'data:image/jpeg;base64,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'
  }
};

const node5 = {
    group: 'nodes',
    data: {
        id: 5,
        label: 'Vertex 5',
        className: 'node',
        backgroundImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
};

const node6 = {
    group: 'nodes',
    data: {
        id: 6,
        label: 'Vertex 6',
        className: 'node',
        backgroundImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGBgYGhoaGhgaGBgZGBocGhgaGhgZGBgcIS4lHCErHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xABOEAACAQIDAwYHCwsDAgcBAAABAgADEQQSIQUxQQYTIlFhcRQyUoGRodEHJEJzkpOxssHS8BYjM0NTVGJyosLhFTSCo7MXNURjg+LxJf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAQEAAgICAQMFAQEAAAAAAAABAhEhMQMSQQQiUTJhcYGRoSP/2gAMAwEAAhEDEQA/AK7tE9A94+mQwMlceegfN9MihIVCkMOEp398MGBlHvgvCzQXgC7xMItBm7IAYPCEYQB32Nha5toL7rnhuMBMAUCRCVieHqh06pQlkNmVWKnQ2IGhF+I3jqNo1O1cQf8A1Ff52p96OY7K5aPVRjwPoMTzL+S3yTGf+qV/3it87U+9B/qVf9vW+dqfej9S9j9MM5HiNofJPslu5DUWVa2ZWGtO1wRuD9ffKD/qVb9vV+cf70I7Qrftqvzj+2OY6pXLbZ3U9U5sp6j6Jjfh9X9rU+cf2weHVf2tT5b+2UnbXSpvuPoMSynqPoMyTw2p+1qfLf2wvDKn7R/lv7YE1KqjXPRbeeBnJkbyW+SZmYxlT9o/y39sPwup+0f5be2P2cV+hxvz/wAaQ1NvJb5JnBjM9OMf9o/y29ssvJjGO9OoruzhGp5cxLZc4qZgpOoByrpu07THMmPm+jmGNyl6TZMNGiIamGSfof1X+HbGv73rfFVPqNM6LTQsafe1b4qp9RpnhkV60KVoovEU4siSuBeAt6oV4THfACJhiFeC8AO8Oc4IaLadxx6HnEiwY/xRunnEYAwOFCBRCvAGkqKMMRGaDNAFGLohS6hjZSwDG4FlJ1NzoNL79JzvONZ7cAdRodQddx645CtX2iuEoLV5qulam4p5kJSoEKl1DuF8e+a4UajLfug+UFKg+esjFQoUUxToBEJ0F3N7C50HYOO6P8LQ5+gjuEyhSpq0wlMU3YZgtS1jlTMeiNGKjrIi8NslKlIhaqkV2poHak6B+bZmGRbdNipcaeTYw6Z22qjQzEdJSMyOVJBAboMLjr16pHSxcoKBTGWLZhnUKRbJkFlyra1rG4K2Fj666JcFoCKiYqMgggggAggggAggggBARUAhMYAJaOSgtSqHyqiD5KN9+VWWvkwPzB+Nf1JS9sePbm+ruvDU0GhhvpiBK1iNtOruuRdHYcODEdUeTk+gm8r/AAteMYeDVhfXmqn1GmeGSz7fco6ZAAysp1HwgR1dsiZFerBq0VeJEO8lQ7wExMEAMiAQjADGB5RBBeCIJnFeJ5xGAkhjfE84kXe8FR1IhBYmWjZ/Ix6lNKnPKodVYDISbMARrcdck5Nq0EgZJcPyEb95X5s/fhryCP7yPmj9+G4frfwpcebGxSUqoqOHOS7JzZUNn4XvwteWwchL6HEDzUrf3xP5Aj95/wCl/wDeHtCuFTtSpkwyVqeV3ADsSRUJLIzFVtoSAuUHfv7ZA7X2i7YV6i1hiCzUnVxlUUED5jkUaEh1RSN40JvaV3H062AxNlcMyCykglWRr5eid3XYGwPEyu5bWtwjxkZ5Sw+2ptJ61dq9QKHYqWyiwuoAva51OW57SY1xKWdh1Mw9BM5WjjG+O/ab/K6Q+maJN4qCCAJggggAggggAiomCAKEDQQQBMk6eMelRQIbZnqMdPi1H1TIyO656FIfwMfTWqD+0QGWOOU1lNw6p7crDiD3j16GMajlmLHexJPeTc/TEATrh6DO6oilnY2VRvJ/HHhYxWlj48cf0zTlOtHDu/iI7/yqzfQJpPJzkbRpgPiAKr9R1RT2KfG7z6BLg4VFuSEUbrkKPNFtrMbWDVabIbMpU9TAqfQYmblz1CqpRyjqdLMAyn06Sn8qOQgCtVwgNxctRuSCN5NMnUH+H0W3FbOyxn6mIi1ieEaQhGKIiYEO8EKCBpzaHi+cSLtJfaB6HnEiTaIx2mp7GcjDULH9VT+oJloM0/ZR97UPiqf1BIyaYJvBYN6i5w4AuR6J0rbOdQCXTUgcRv47uG/uBnbY/wCgH853m3w9Pxxj2vSDqVa9j1Wvobi0qYyw7lZTD/Sqvlp/V7IP9Mq+Unpb2SWB7/VDzfjSP0ifeqDyp5HYrFVFdTQGVcti7jcB/AeN5AP7mmM66Hy3+5NaZo32ghdLBGqdJOiH5sizXzZ9NBvtxjmMibdsE2xsirhqhpVlyPbNYMrAqSQrAqTocp32PWBGWJPS/wCKepFH2S1+6LpjMuXJamnRLZiLgm+bje+6PeTPIyliaCVqzvds2VEKqAqsVBYkEk6E6W0IjRragQTStqcgaQpOaGc1NMmZ7r4wvcKt915WvyKxfkL6W+7AtVWoJZhyJxfkL6W+7FfkRi/IX0v92MaqrwS0fkRi/IX0v92F+RGL8hfS/wB2IaqsQSz/AJEYvyF9Lfdh/kPi/IX0t92MaqrwS0fkPi/2a/KPsjnZ/IqsKi+EU/zXSzZWIPiHLqLHxssQ1VOjuuOhTHVTPrq1G/ul/PI3DeQ4/wCb+2Uvb2E5iu9O5IUKFJ35SoIB7Rfz74HrSOl89z7ZtkfEEdJiUTsVbF2HexC/8D1yh3mncj61sHSCjy9e01HJip49pnam0VwuHfEOAxWyU0J0eo3ig9gGp7JkO1Nq1sS5etUZyTexPRHYq7gJe/dHDHCUCL2Wu+bvamMhPoYTNoQ8r8OuGxD02zIxU9YNvT1zX+Qe3DiaWV/HTQ99rg9xH0GY3NA9yimxes3wQF7rgP8AYR6YX8ljedG3uibIFDECogslcFiBuDqRn9OZW7y0p5mne6ib4al18+B5jTqE/VEzMARHZyIjSAxQ1hOIDQrQorLBAkvjz0POJFkySxo6HnEjYGMNNT2V/tqHxNP6gmVTVdlaYaj8TT+oJGTTBY9lH3uu7xjvF/1nV+LR8r93p/xGOyL+Dra/jHdv/SH1dfZePlJ/AM0x/TE5d10Dfi/+IrN+Lmcxf8AxNRtP8GURTnX/ACY22hSzoBzXO9NDkzlLWPj5uNurjID/AFhhjzh7AIKKvexvcvbr3WMm9pUM6KOZWraopys/N5bA9MHiRut29kAyPl+bY11y5Mq0+hmzWuinxuN7y/8AIf8A2dD+VvrvM45an39WGULbmxkvmy/mkNs3G+/z2mj8iWtgqP8AI312iqZ2z/DbYbJVJxeM0pXBygHWvSXMPfBAbpW0y6E+fo20m5lB4ZjAecrEtuJCJTup/PXt0rjXidBvPGhQxZQkYGmFZlpkNQCElmVguRiGtmVSTuFhrpJXaGzayVKlPwek6KteoipQZgM6k0+nbpMcihlPEDfeGxq62SuNviEHheLAQUgVLWDkU1c6c7rcb7343uI2w+0ei7+F4w5wigZ9U51iVYfnTa2W2g46Q38JCc6MNd+cAD+BnPl5orqljbUBb9Xoi0oVw9JPBQEcYc1LYU5DZundivRK30GlrndAjSttbLRQeFY65zVM4fpWDtSyE84eKX321HGOMRtIc7bwnGfmucQgObOcOpdien8IDjftjdKOJZagbBjoUyEU4MCx59DZRk6Qyu7W14m2l4dRMTlD+DdN3rBn8CUsQyU7Z1ydHNnqAnjrvtAFrtMdN/CMac5yBc56BqozqVGfgB1dVtIjw4ZUTwnG9M03z84bgOWQKen167xuE608NiDVVDhlFM8yzA4VAhJpKHOcpvVmYb9NRwtOdClijTLHD9JFp5R4GgdMr3YKmTUAEkdWp0gBVNpqzH8/jRzVM3AqnpZamW982/pjidFhVdqoM7mrjDnetTyc7YJ0RqATw50WuNMnCCth8SEVlw6hnWoHbwSmbkuCA45s20G6wva+s7vhK/OOngyZAazU1OFo5NaZyMrZLG7Ig8bWwEAl+QTrWatkasbCnpVYOB4/iWOl7a+aQPLrDFcYwJ3pTP8ATb7JaPc9pVFNbnKSoCtO1qSUrnp5gciLe2nXa+/WQXuh/wC7PxdP7YqqTcU91sbdU0H3OccrU3osdUbOv8jkA+hzr/MJRnQN7dYvAYqph6i1KZs6HqurA6MjjipGhEW9jWq3HH7BTE4c02BKVB0t11I1R0O66n03PbMc2xySxeGcq1F3UHR6al1I4Egap3MB5982Pktyuw+NQBSEqgdKixAYW3lPLXtG7jaTzCE4OyZPPWy+S+LxDBUoOBxd1ZEHaSw+ibFyb2CuCoCmDmY6u3WTvt2bvQJPOZWuU3KelhQVuHrW6NMHxTwNS3ijs3nh1gtPHGRUPdOxoZ6VBT4gNSp2FhZAeo5cx7nWUIiP8ZiXqO7uczu2Zm4m/wBlvonFl04fgxbFhvaGVndU/HfvhhL6d3rh7D1cLQo45gwQ2PWnWNboecSNknjB0POJFkRpCars4+96PxNP6gmUzVMF+go/E0/qCTkvx/Ky7KHvdNx6R3m36wnf5o/Udh/HnjLZH+3T+ZuF/hufN3x8vm9UvHqFl3R2/GntnOp+PFnU+b0j2TlVI7PT/iUFFf8A83qdlGmPg+Up7pbtpUM6IOZSraoDZ3yZbIwzqQNW1tbTxieEqVPXa1fspU+P8nZLZtPD50Qc3TqWqX/OPlC9BhmTTVtbW00YwTPljHKo+/K2gXpKMoNwOgugPHr88v8AyZx4TCUFtfNlTzu7D1aHzzOdvt75q6AdPcNw0G6X7YWGy0qF9MlPnDfymAA9AY+iZ55aX4cfbK7SGztnBRSpBrph1A7HqFbM1uvVmPawkPhcHTxWOfEEh0oOtNFGZbPTJN824jMS2nlDzy+06jUsOWTWowCoOupUIVB6WHojDHsMBgmCKOgMi6npPUPSa5N95Y9yiZ47/tvnJ89RTHwtBEqDn0yujZCKdVuiMUhBchOuiy3v5OnEnX2bR1omtTvTfEs45urk0SnnCNk3jmXtpxXfOG0sXTRsng6FUQKOnUF1Yc4QbNbxnbh1dU7bR2kiYivbDob1K6m71jfMzo5sHFiQx3fYJu4zinToc6tfnQQrUl0o1eczLQC2AtqpCMfR3RvS2fRVOb51L1RRsVpVCls5C85poSQ0aHaiZMng6WBDePWvdQwGofqdobbYUsjeD07oABZ6wFlJYXAex1JgDqvgKDKF5wWpU6ma9F7W57U02tqQzgbuuLqUcPnesa2jtiFH5pswL0iGDa2IHOKdD175wwm0EYV74enrTZj06281EJGr6C5vpbdBRxyNTe+Hp/m8rpZqw6TvTptm6eosF9EYLp7PoWWktezu+HYHmny3ZHKcQRcVU67WOuojfFphnyEV26KZdaBO96j783U49EsGyMTgMlOviUyVA3RCHEMlqARUYgM2oAA13yOSjhhjOZNBeYDuM4fEZsioXBB5zfputAtLF7mFGmj4jJUL3Wncc2UtYvY7zfefRI33RP8Adn4un/dLRyOOAzVfAs2bKhfNzu4lsls/e26VX3RW99//ABp9Lya0nEV3CUHrOtOkpd20RRYE2BYi5IG4H0SeTkpibXfD1AcwWwZNAb3c6m9rDTjr2RryDH/9DDfzVP8As1JsGJqHO68CaQ9JbN9AmeV0rCbjI/yUxwsfBqgINwQVuDwIIbQyawr7apgKvhBA4OqVD8pwxPpmrgxUXtVerHdr7Q2sEviHrohIBYKtMXN7C6Kp4Srquv43nWa/7pNvAj8Yn90yLN9Me9jWiqi2YdqiIdN/dHOIVSUPmO7d+DELT16/xeKXgWcuCgj8dU6U3sb9pM6NS1I7ft/xFpQ0uRu7u/7IWwTGkawRfMkQSVaHjT0D5pFNJLFt0D3iRrTWMBFpq+HFqVMf+2n1BMoIlkbllUCgCkllUKNWv0RbXWLKb6VhZO2s7GHvena+9t2nwn39Y/xJADv9fskdsGqfBqJ06d7+fO2nnElM3dLx6h3uk+n1+ycaxP4DRxm7pxxB0lEo+z6rNtXFJdiBTp9HpWFkpa24eN65atrUrqmanScK5P505cnQYZkvvbW1tNCZB7Aw5GPxtQqdWpoDbgaVJjb0eqWDbKXCHJRbKzG9U2y9BhdBbVtbbxoT3QTGEY6nnxDoN71MoA3akKLTXkw62N9xAFv4Vvp6zM35O4XnNodiO7nq6JIFvORNOqDSY+S8t/BOLTZ6Ad0djohLKvAsQVDHuBNu2N9vBCAKqB0prnKlQ13IIAAOl7Gw/nkjRS5B6pC7UVq2IagB8NWc8MosUUegHzSMbrlrlN8HWC2TRdFepQol24ZEawsLAkjU20v2bo9q7NoMxJw1BiSSWNNLkneScu+87KmXTqiwd/fNsbdObKSZXRkdmYf92ofNp92JOzqH7tQ+bT7sfMZxd7amPadb4cFwlFb2oURcWNkQXHEHo6jdO1HAUbECjSF94CJYgai+muv0SPfGB/F0ZWynsPAjsP2zjgajo5QnQdJe1dxHmOndlk3LlrPHuJg7Po2A5qnYXsMiWF99hbSK8Dp5s3Npm8rIt91t9urSHQxKv4p1FxbtG+dpW2dmuyMPQRL5EVL78qhb23XtM090Q++x8VT+tUmmzMPdE/3Y+Jp/XeCa4cgv/MMP3v8A9l5rWIvnc2JGenqLaZesX7R65j/JHGJRxdKrUbIiZ8zWJtem6jQAneQJpZ5W4Em4xIFyCRlcAkbibr+LTLPe2njskWm8VnlbHK/BfvKf1eyLXlZg/wB5p+k+yTyvcNfdIf3kfjE/umSA33dc0Hl7t7DVsLkpV0dy6HKrXNhmubdUzdGtLk4Z5Xk7FTVfPOq1N3X+D9EZF9RFh9TC4iZHbvxHfb8d8VTrG/Yb6ekfbG4qRJNjFpXsdtUgjRjBDUHtTnF6IT2iMOcklj/EJPWPpkWZTOF5usRJAMIQCUGjbP8AdEoUqSU2w9VigtcZLX13XcdZ4COP/FDD/u1b/p/fmXsYm0c6K2tR/wDFHD/u1b00/vwH3UcP+7VvTT+/MshxlutMX3SMKGLrhKoZiCxBp9IhQoJ6XAADzQsV7pOFcDNg3YrcoX5s5SVKkrcmxsSPPITkdsOhiablwXe+UpcrzY4MLHjqcx06JHA354Hk1hq9c0aWJdihJJKKFqoPG5hwdSulyR0hdlFhaLZ8n3uf4Ql62JIsrkqg73zNbsHRHmPVLqBec6VBUVURQqqAqgbgBuklh8PeYZX2rswnrjpzo0oHpKjFwOk289wsCfRIvH8sMJRdkNS7Lo2VHZQeIzKCCR2SPqctsIdTUf5up92VjijPySdJ4wMbSvjlpgxrnf5t/uxD8tMGd1R/mqnsmrntWC844lbqRInB8p8PVYojsSFvqhS/WFDG5I7o32pyqp0SA9OoQdzKqFe7VxFbOjkuvb4DE0zbOgOa3SHXb7RvEc06hdOcXUhc47rdMei/nAjHZW36NZwqFgzAtlZbEEbxe5B010PCS2GwIR2YG6N0slgQpJu47ri4/mI3WmVmuK6cbubhvhiUrWvpUU1F/mUhXA77qfO0sKNcSMq4AgIQb825I6zTcEFe8dA/8Zw2jymw2HqGm7OGAU6IxFmFxqJWFR5pxtNzMfdFHvpfiU+vUlqPLjB+U/yGlD5T7XXFYg1FUqoVUUNbMQpY3NtxJY6d00c9ccBserXF0yWHXUQH5GbMPRHbclcT5CnudPtMhrA8IdrbtO6Z5TO37bJ/M2rG465lv9pU8msV+xPy6f3on8nsSP1DfKQ/Q0jVruNzt5mb2xfhlQfrH+W/tka835n+K34vxf8ATttg4n9g/oB+gxB2PiB+oqfIY/QJwG0Kw/XVfnH9s6Da1cbq9X5bH6TH/wCv7Dfi/cKmzqwP6Gr82/snAgjfodx7OsR6u3sSt7YioL7+kYyq1WYlmJZmJYk7ySbkmXjvU9u0XW7rod+MJmiM0O+kehsec9cEReCGi2l9ofoz3j6ZE6ya0IsRp1GJ8GTyRDYQ1jBYyZXDJvyj1zoMKnk+s+2GxpBFTDVTJs4VPJHpPtjbEYdfgi0NjSMyGAJA5YHX7JYOTHJt8SQ73SiDqdzPb4KdQ628w13O3U5GM9rqEbOp1kwdV0QhHcLVcXzNTA0Vdf0YfNnsNbrckKwHHZGGrVKyJhr86GDIwNubynx2bgo9d7WN7HVFREQIFUIFyhbDLa1rW6rSG2TjqGCcpSpWDks75szb+itrXyKCQAN3aSTJx8k+V5eG8WLdUwZGXNYtlUsVXKpf4RVbmwvra5te0pvLLlXkVsPhj0z0KlQHxL6FUPlcCeHfuHLD3QMtNqOHyNUcEFwbimDoSB5fUOG88Ac1RzlFz6h3D6IevO4q+Xj1dqlPWw4aeYACcubMQXPXFU6muoB77/YRHMbGdylHzRtENQNrgbt8lMPiqG56PnV3+gmS+BoYWowVUNzpYs4/uj1S3Kp4BGo0I4jeO4y47MqJjKZRx01ABH96x1tHkfSt0GZGtprmW/bmuZTaFephqt9zobEcD1g9hEXGXS5vx3nqrBsjk5WTEh9AiG4YnVgQRYAcbE9k0jZdiliL3Mq+yNrLXTMu/wCEvEH2dss+zH3dkzyt3y6MJjJ9qV5nS3ZaZR7pFDLixpvpUz/U6/2zXKeolT5S7Oo1645xMxRAt8zjiW+CR5UvGbvDPy37eWTIl4OaM06nyWwtv0X9dT70z/lHTFLE1aaDKiFQo32BRTva5OpMvVc+4ZCmd0PL2Thz7dfqEdYclhFZTljiUN4YU9Udc1F06Ivr9sBwYMkFpIPheqcGw564tg3CnqhAGKZiIkNGW4MqeqJnQGLyjq9cBtxtCnXLBAbSatOoM4Ktp2WSbraEdIgmJBgCmMQYsiWLYWw1cK7g5d4B+F1Ejq+nu3lskVjjcrqGexOTArkVKoIp7wu4v7F+mXd3VFAAAAFgBoABoABwnHEYkINJW9qbUvoDMbla6ccJjDnam1bkhZUNq7UK3VD0jvPk/wCYW0ceVFh4x9XbIJ9Zphj81l5fJ8QgmPWWwA6gB7Y0pi5HfHTtN3K5mSNbZnN0FrO4u5siKQW03lz8Edmp7pKbO2fzGGfFuQHYWoKQDa5sXsd5te3UNeOlUZrxH06mpewFh+OuSOA2k1IdvXbWRKi8U5is3weNs5aBsrlAtUBWPSHA/ZC2rsOnXbPcq1gLg7wOuUCjUKkEHWSn+u1QNDM/Sy/a3nkmU1kvvJ7Z2GToCmUqW1JY5n43DX1HZ6pY0oZBdbleO4kejfMlp8oalulYkbjxE4VHasxfnWzgFrO1gLa2Q7h2CO477KZ+vTc8NU0kRteiQ4fgwtftG71fRMv2XyoxOHdbuzLpdHJII7CdR3j1zU8BjBjKBbI6a6ZgN44qRvHCLHeN5XlZ5MbpwpnSZdy1S2Mqdopn+hR9k0ym1tD/APkznl4pGK1400I/qH2TauRW4+wQ088ZyUwFIlL/AMR+yKnHYLHaYcixOoh0KYBj5zYTO1pIjsRUAFhGN7x5iUN9I25u0cKmtUdkbkRzWJjUmVE0uGGnMGKVowXeCFmgiCWYiEHjU1IOck6Vs5LxBaxnEPDLxksHJ7ZvOvmcdBDr/EfJ7uv/ADLlWq5RGWyqYSkiruCjzki5PpJnfE4bOLXtOfK7rtwx9Yr219o8AZXHxEtOL5Nh9eca/cLSCxmwKlPUWcdmh+THjInyXL4QGJUk3Mbu0fVVjKqNZ0Rx0EHGOaLpdc9yotcDQkcQDwvGmYwncnSGhs+2rtR8Q+ZtFAsiDxEUaBVHdI+CCMtulM2iWMUd05wMaxTQ1WIJgHSmL3gDQ6B1iXGsA7Zsy2O/gb8OqatyN21RGGpo1RQ+oKkgG+Y29N5kam0mNm7WdFKAIVIZSGUa5gQCSNbgm47QJGUaePLVa1jqNmLDceHbM490WmBVpMONNhbqytf+71S9cntoLXohGuHRVVwTc3to1+o2PoMpnujizUQVOmfW2ljksL+Ywwz3xT8uOvuiky0bAQGiL+UZV5cuTH6FRbQlu7fHl0yx7PDhb7h5xG9WmQN0lxRI3HzRnjEJFrHSRGliFqMTOaJrqNY7qJbdGgOu6NLhjKNr3kW2+TeJ3fi8hqo1lYlXOCHaGBKIV4IVoIA8iGMEEkxCoYrPBBAlz5PbUzIAd62U/YZYkrXggnNl27fHd4wovHGGwSkZmF77l4efrggl+ObpeS6iO24tMK2akjWF9VHV12+iZXiqis5KLlU7luTbzmHBNnLk4lNJygglRFCCCCMi+ERBBAHehSNIIIoddqMS51gggZN53w4JuBvsT5gLmCCK9DHtpHIbDsKbVmP6QqoHEBAdSe8nTsj/AJVbKGJolNA46SN1MBuPYdx74IJz5cZcOzHnDlkBBueGpFuojQy0bBx6qiKf4idP4jBBN8unHj2nl2lTPEjzGdXrKwzX81jBBM2qLxK33RGHwt7k8IIJSflFbSr65V065FuYIJURXJmhBoIJQKzQoIIB/9k='
  }
};

const edge = {
    group: 'edges',
    data: {
      id: 'edge1',
      source: '1',
      target: '2',
      className: 'data:image/jpeg;base64,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'
    }
};

const edge1 = {
    group: 'edges',
    data: {
      id: 'edge2',
      source: '1',
      target: '3',
      className: 'edge'
    }
};

const edge2 = {
  group: 'edges',
  data: {
    id: 'edge3',
    source: '3',
    target: '4',
    className: 'edge'
  }
};

const edge3 = {
  group: 'edges',
  data: {
    id: 'edge4',
    source: '3',
    target: '5',
    className: 'edge'
  }
};

const edge4 = {
  group: 'edges',
  data: {
    id: 'edge5',
    source: '5',
    target: '6',
    className: 'edge'
  }
};


// Register click event handler for nodes
cy.on('click', 'node', (event) => {
  const node = event.target;
  const nodeData = node.data();

  // Update the imageContainer with the image URL
  imageContainer.style.backgroundImage = `url(${nodeData.backgroundImage})`;
  
  // Show the imageContainer
  imageContainer.style.display = 'block';
  
});


cy.on('click', (event) => {
  const target = event.target;
  
  // Check if the clicked element is not a node
  if (target === cy || target.isEdge()) {
    // Hide the imageContainer
    imageContainer.style.display = 'none';
  }
});

boton.addEventListener('click', () => {
  const startNodeId = primeroInput.value;
  const endNodeId = segundoInput.value;
  
  if (startNodeId && endNodeId) {
    const shortestPath = findShortestPath(startNodeId, endNodeId);
    text.textContent = `Shortest Path: ${shortestPath.join(' -> ')}`;
  } else {
    text.textContent = 'Please enter valid node IDs.';
  }
});


const findShortestPath = (startNodeId, endNodeId) => {
  const startNode = cy.getElementById(startNodeId);
  const endNode = cy.getElementById(endNodeId);

  const dijkstra = cy.elements().dijkstra(startNode, (edge) => {
    return edge.data('weight') || 1;
  });

  const pathToNode = dijkstra.pathTo(endNode);
  const pathNodeIds = pathToNode.nodes().map((node) => node.id());

  return pathNodeIds;

};

cy.add([node, node2, node3, node4, node5, node6, edge, edge1, edge2, edge3, edge4]);

cy.layout({name: "cose"}).run();